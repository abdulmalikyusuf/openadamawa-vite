import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

import VisualizationForm from '../components/VisualizationForm'
import { BarChartWidget, LineChartWidget, PieChartWidget, AreaChartWidget } from '../components/Widgets'
import { extractLGAData, extractMDAData, extractYearData } from '../utils/parseProjectData'
import { ProjectsContext } from '../_contexts/ProjectsContext';


function Visualization() {
    const { projects } = React.useContext(ProjectsContext)
    const [options, setOptions] = React.useState()
    const [totalProjects, setTotalProjects] = React.useState()
    const [contractSum, setContractSum] = React.useState()
    const totalProjectsTitle = "Number of projects by"
    const contractSumTitle = "Contract sum of projects by"
    
    React.useEffect(()=> {
        const {yearTotalProjects, yearContractSum} = extractYearData(projects)
        setTotalProjects(yearTotalProjects)
        setContractSum(yearContractSum)
    }, [projects])

    React.useEffect(()=> {
        document.title = "Visualization | FollowTaxes"
      }, [])

    const filterHandler = (options) => {
        switch (options?.criteria) {
            case "year":
                const {yearTotalProjects, yearContractSum} = extractYearData(projects)
                setTotalProjects(yearTotalProjects)
                setContractSum(yearContractSum)
                setOptions(options)
                break;
            case "lga":
                const {lgaTotalProjects, lgaContractSum} = extractLGAData(projects)
                setTotalProjects(lgaTotalProjects)
                setContractSum(lgaContractSum)
                setOptions(options)
                break;
            case "mda":
                const {mdaTotalProjects, mdaContractSum} = extractMDAData(projects)
                setTotalProjects(mdaTotalProjects)
                setContractSum(mdaContractSum)
                setOptions(options)
                break;
            default:
                break;
        }
    }
    return (
        <Container className="">
            <VisualizationForm optionsHandler={filterHandler}/>
            <Row className="mt-5 d-lg-flex justify-content-between">
                <Col lg={6} className="mb-4 mb-lg-0">
                    {options?.chartType === "bar" ? <BarChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget title={`${totalProjectsTitle} ${options.criteria.toUpperCase()}`}
                    {...totalProjects}/>: null}
                </Col>
                <Col lg={6}>
                    {options?.chartType === "bar" ? <BarChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "line" ? <LineChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "area" ? <AreaChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                    {options?.chartType === "pie" ? <PieChartWidget title={`${contractSumTitle} ${options.criteria.toUpperCase()}`}
                    {...contractSum}/>: null}
                </Col>
            </Row>
        </Container>
    )
}

export default Visualization