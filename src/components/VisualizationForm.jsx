import React from 'react'
import { Row, Form, Col, Card } from "react-bootstrap"
import { FaMoneyBill } from 'react-icons/fa'

import { ProjectsContext } from '../_contexts/ProjectsContext'
import { parseProjectParameterContractSum } from '../utils/parseProjectData'
import CountUpAnimation from './Counter'


function VisualizationForm({ optionsHandler }) {
    const { mdas, lgas, contractors, projects } = React.useContext(ProjectsContext)
    const [criteria, setCriteria] = React.useState("year")
    const [chartType, setChartType] = React.useState("bar")
    const [filterParameter, setFilterParameter] = React.useState()
    const [options, setOptions] = React.useState()
    const [subTotalContractSum, setSubTotalContractSum] = React.useState(0)

    const arr = [{title: "Local Gov't Area", value: "lga"},
    {title: "Ministry, Department or Agency", value: "mda"},
    {title: "Contractor", value: "contractor"},
    {title: "Year", value: "year"}]

    React.useEffect(()=> {
        optionsHandler({ criteria, chartType })
    }, [criteria, chartType])

    React.useEffect(()=> {
        switch (filterParameter) {
            case "lga":
                setOptions(lgas)
                break;
            case "mda":
                setOptions(mdas)
                break;
            case "contractor":
                setOptions(contractors)
                break;
            case "year":
                let years = []
                projects.map(project => {
                    if (years.includes(project["year"])) return
                    years = [...years, project["year"]]
                })
                setOptions(years.sort().map(year => {
                    return { value: year, id: year, name: year}
                }))
                break;
            default:
                break;
        }
    }, [filterParameter])
    
    
    const handleFilter = (event) => {
        setSubTotalContractSum(parseProjectParameterContractSum(filterParameter, event.target.value, projects))
    }
    
    return (
        <>
            <Row className="py-5 d-flex justify-content-between align-items-center">
                <Col xs={12} lg={7} className="border border-1 p-lg-5">
                    <Row className="fw-bold text-lg-center">
                        <Col xs={12} lg={6}>
                            <Form.Group className="mb-3 mb-md-0">
                                <Form.Label>Criteria</Form.Label>
                                <Form.Select onChange={(e)=>setFilterParameter(e.target.value)}>
                                <option value={""}>Select Criteria</option>
                                {arr.map(ar => (
                                <option key={ar.value} value={ar.value}>{ar.title}</option>
                                ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Form.Group className="">
                                <Form.Label>Options</Form.Label>
                                <Form.Select onChange={handleFilter} disabled={!options}>
                                    <option value={""}>{lgas ? "Select Option": "Select a criteria first.."}</option>
                                    {options?.map(option => (
                                    <option key={option.id} value={option.name}>{option.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={5} className="my-5">
                    <Card className="text-center shadow rounded border-0 bg-state2state" bg="">
                        <Card.Body>
                            <div className='p-4 text-white d-flex justify-content-between align-items-center'>
                                <FaMoneyBill size={"60"} className='text-danger text-white'/>
                                <h3>
                                    <span className='me-1 text-decoration-line-through fw-bolder'>N</span>
                                    <CountUpAnimation duration={1000}>{subTotalContractSum}</CountUpAnimation>
                                </h3>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">Total contract sum</Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="fw-bold text-lg-center">
                <Col>
                    <Form.Group>
                        <Form.Label>Criteria</Form.Label>
                        <Form.Select className="rounded-3" value={criteria} onChange={(event)=> setCriteria(event.target.value)}>
                            <option value="year">Year</option>
                            <option value="lga">LGA</option>
                            <option value="mda">MDA</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Chart Type</Form.Label>
                        <Form.Select className="rounded-3" value={chartType} onChange={(event)=> setChartType(event.target.value)}>
                            <option value="bar">Bar</option>
                            <option value="line">Line</option>
                            <option value="area">Area</option>
                            <option value="pie">Pie</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default VisualizationForm