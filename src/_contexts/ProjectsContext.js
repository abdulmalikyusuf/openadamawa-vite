import React from 'react'

import axiosInstance from '../utils/axiosInstance'
import parseProjectData, { parseMDAName, parseLGAName, parseContractorName } from '../utils/parseProjectData'
// import projectsData from '../data/projects'
// import MDA from '../data/mdas'
// import LGA from '../data/lgas'
// import CONTRACTOR from '../data/contractors'


export const ProjectsContext = React.createContext()
ProjectsContext.displayName = "ProjectsContext"

export default function ProjectsProvider() {
    const [projects, setProjects] = React.useState([])
    const [rawProjectsData, setRawProjectData] = React.useState([])
    const [mdas, setMDAs] = React.useState()
    const [lgas, setLGAs] = React.useState()
    const [contractors, setContractors] = React.useState()

    React.useEffect(()=> {
        axiosInstance.get("/projects").then(({data}) =>
        {
            setProjects(parseProjectData(data.data))
            setRawProjectData(data.data)
        }, (err) => err.response)
        // setProjects(parseProjectData(projectsData.data))
        // setRawProjectData(projectsData.data)
    }, [])

    React.useEffect(()=> {
        axiosInstance.get("/mdas").then(({data}) => setMDAs(parseMDAName(data.data)))
        axiosInstance.get("/lgas").then(({data}) => setLGAs(parseLGAName(data.data)))
        axiosInstance.get("/contractors").then(({data}) => setContractors(parseContractorName(data.data)))
        // setLGAs(parseLGAName(LGA.data))
        // setMDAs(parseMDAName(MDA.data))
        // setContractors(parseContractorName(CONTRACTOR.data))
      },[])
    
    return {
        projects,
        rawProjectsData,
        mdas,
        lgas,
        contractors

    }
}