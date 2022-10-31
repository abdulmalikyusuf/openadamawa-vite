import React from 'react'
import {Row, Col, Table, ButtonGroup, Form, Button} from 'react-bootstrap';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image"

import TableBody from './TableBody';
import Pagination from './Pagination'

const TableComponent = ({ queries, projects}) => {
    const componentRef = React.useRef();
    const [searchText, setSearchText] = React.useState("")
    const [filteredProjects, setFilteredProjects] = React.useState()
    
    const searchHandler = (event) => {
        setSearchText(event.target.value)
        setFilteredProjects(projects.filter(project => project.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }

    const filterHandler = () => {
        // if (queries.length === 0) return projects
        
        // return projects.filter(project => {
        //     return Object.keys(queries).every(accessor => {
        //     const value = project[accessor]
        //     const searchValue = queries[accessor]

        //     if (searchValue.length === 0) return true //If no option is selected return the project w/o filtering

        //     if (typeof value === 'string') {
        //         return value.toLowerCase().includes(searchValue.toLowerCase())
        //     }

        //     if (typeof value === 'boolean') {
        //         return (searchValue === 'true' && value) || (searchValue === 'false' && !value)
        //     }

        //     if (typeof value === 'number') {
        //         return value === searchValue
        //     }

        //     return false
        //     })
        // })
        
        if(Object.values(queries).length === 0) return projects

        return projects.filter(project => ((project.lga.includes(queries.lga)) ||
        (project.mda.includes(queries.mda))) || (project.contractor.includes(queries.contractor)) ||
        (project.year === +queries.year))
    }

    React.useEffect(()=> {
        setFilteredProjects(filterHandler())
    },[projects, queries])
        
    
    const [activePage, setActivePage] = React.useState(1)
    const projectsPerPage = 10
    const count = filteredProjects?.length
    const totalPages = Math.ceil(count / projectsPerPage)
    const calculatedProjects = filteredProjects?.slice((activePage - 1) * projectsPerPage, activePage * projectsPerPage)

    return (
        <Row className="mt-5 border py-3 py-lg-5 px-lg-2">
            <Row>
                <Col xs={12} className="mx-auto">
                    <h3 className='border-2 border-bottom text-center'>Table Data</h3>
                </Col>
            </Row>
            <Row className="d-block d-lg-flex justify-content-between my-3">
                <Col xs={12} lg={4} className="mb-3">
                    <ButtonGroup className="w-100">
                        <Button variant="primary" className="shadow text-white bg-state2state">Download CSV</Button>
                        <Button variant="primary" className="ms-2 ms-md-4 text-white shadow bg-state2state">PDF</Button>
                        {/* onClick={()=>exportComponentAsPDF(componentRef, {fileName:"Projects", pdfOptions: {unit: 'mm', landscape: 'p'}})}  */}
                    </ButtonGroup>
                </Col>
                <Col xs={12} lg={4}>
                    <Form.Group className="" controlId="formBasicMDA">
                            <Form.Control className="rounded" placeholder="Search..." name="search" type="search" value={searchText} onChange={searchHandler}/>
                    </Form.Group>
                </Col>
            </Row>
            <Table striped bordered hover size="sm" responsive="lg" className="mt-2" ref={componentRef}>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Year</th>
                    <th>Contractor</th>
                    <th>Budgeted Amount(NGN)</th>
                    <th>Contract Amount(NGN)</th>
                    <th>MDA</th>
                    </tr>
                </thead>
                <TableBody projects={calculatedProjects}/>
            </Table>
            <Pagination
                activePage={activePage}
                count={count}
                rowsPerPage={projectsPerPage}
                totalPages={totalPages}
                setActivePage={setActivePage}
            />
        </Row>
    )
}

export default TableComponent