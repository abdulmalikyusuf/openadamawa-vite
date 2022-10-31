export default function parseProjectData(projects) {
    // console.log(projects.filter(project => project.project_lga === null))
    return projects.map(project => {
        return {id: project.id, budgetAmount: project.project_budget_amount, contractAmount: project.project_contract_amount,
            lga: project.project_lga?.lga_name, mda: project.project_mda.mda_name, title: project.project_title, year: project.project_year,
        contractor: project.project_contractor.contractor_name}
    });
}

export function parseLGAName(lgas) {
    return lgas.map(lga => {
        return {id: lga.id, name: lga.lga_name}
    })
}

export function parseMDAName(mdas) {
    return mdas.map(mda => {
        return {id: mda.id, name: mda.mda_name}
    })
}

export function parseContractorName(contractors) {
    return contractors.map(contractor => {
        return {id: contractor.id, name: contractor.contractor_name}
    })
}

export function parseTotalContractSum(projects) {
    let sum = 0;
    projects.forEach(project => sum += +project.project_contract_amount)
    return sum
}

export function parseHighestContractAmount(projects) {
    return projects.sort((a, b) => a.project_contract_amount - b.project_contract_amount)[0]?.project_contract_amount;
}

export function parseLowestContractAmount(projects) {
    return projects.sort((a, b) => b.project_contract_amount - a.project_contract_amount)[0]?.project_contract_amount;
}

export function currencyFormat(number) {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US'
    // , {
    // style: 'currency',
    // currency: 'NGN',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  );
  
  return formatter.format(number); /* $2,500.00 */
}

export function formatDigits(number) {
    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short'
      })
    return formatter.format(number)
}

export function parseProjectParameterContractSum(parameter, value, projects) {
    let result = 0
    projects.forEach(project => {
        if (parameter==='year') {
            value = +value
        }
        if (project[parameter] === value) return result += +project["contractAmount"]
    })
    return result
}

export function extractYearData(projects) {
    const results = {}
    const resultsSum = {}
    projects.forEach(project => {
        if (!results[project.year]) {
            results[project.year] = 1
        } else {
            results[project.year] += 1
        }
    })
    projects.forEach(project => {
        if (!resultsSum[project.year]) {
            resultsSum[project.year] = parseInt(project.contractAmount, 10)
        } else {
            resultsSum[project.year] += parseInt(project.contractAmount, 10)
        }
    })
    return {yearTotalProjects: {series: Object.values(results), labels: Object.keys(results)},
            yearContractSum: {series: Object.values(resultsSum), labels: Object.keys(resultsSum)}}
}

export function extractLGAData(projects) {
    const results = {}
    const resultsSum = {}
    projects.forEach(project => {
        if (!results[project.lga]) {
            results[project.lga] = 1
        } else {
            results[project.lga] += 1
        }
    });
    projects.forEach(project => {
        if (!resultsSum[project.lga]) {
            resultsSum[project.lga] = parseInt(project.contractAmount, 10)
        } else {
            resultsSum[project.lga] += parseInt(project.contractAmount, 10)
        }
    })
    return {lgaTotalProjects: {series: Object.values(results), labels: Object.keys(results)},
            lgaContractSum: {series: Object.values(resultsSum), labels: Object.keys(resultsSum)}}
}

export function extractMDAData(projects) {
    const results = {}
    const resultsSum = {}
    projects.forEach(project => {
        if (!results[project.mda]) {
            results[project.mda] = 1
        } else {
            results[project.mda] += 1
        }
    })
    projects.forEach(project => {
        if (!resultsSum[project.mda]) {
            resultsSum[project.mda] = parseInt(project.contractAmount, 10)
        } else {
            resultsSum[project.mda] += parseInt(project.contractAmount, 10)
        }
    })
    return {mdaTotalProjects: {series: Object.values(results), labels: Object.keys(results)},
            mdaContractSum: {series: Object.values(resultsSum), labels: Object.keys(resultsSum)}}

}
