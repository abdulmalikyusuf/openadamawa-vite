import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import CountUpAnimation from "../components/Counter"
import FloatingDropdown from '../components/floatingDropdown'


const LGAs = ["All LGAs", "Jimeta", "Minchika", "Ganye"]
const sectors = ["Health", "Education", "WASH", "Agriculture", "Social Development", "Economic", "Others"]


function Budgets() {
    const [LGA, setLGA] = React.useState("All LGAs")
    const [sector, setSector] = React.useState("Health")
    const [summary, setSummary] = React.useState({total: 1000000, spent: 999999})
    
    React.useEffect(()=> {
        document.title = "Budgets | FollowTaxes"
    }, [])
    
    const budgetDifference = summary?.total - summary?.spent
    console.log(budgetDifference>1)
    
    const handleChange = value => {
        switch (value) {
            case 1:
                setLGA(1)
                setSummary({total: 200000, spent: 91099})
                break;
            case 2:
                setLGA(2)
                setSummary({total: 500000, spent: 48999})
                break;
            case 3:
                setLGA(3)
                setSummary({total: 300000, spent: 295000})
            break;
            default:
                setLGA(0)
                setSummary({total: 1000000, spent: 999999})
                break;
        }
    }

    const dropdown = [
        {
            criteria: "LGA",
            options: LGAs,
            handleChange: setLGA
        },
        {
            criteria: "Sector",
            options: sectors,
            handleChange: setSector
        },
    ]

  return (
    <Container className="pt-5">
        <Row>
            <Col xs={12} lg={4} className="d-flex mb-5 fs-2">
                {dropdown.map(item => (
                    <FloatingDropdown key={item.criteria} {...item}/>
                ))}
                {/* <h5 className={`fs-5 me-2 me-md-4 ${ LGA===0 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(0)} style={{ cursor: 'pointer'}}>All</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===1 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(1)} style={{ cursor: 'pointer'}}>Jimeta</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===2 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(2)} style={{ cursor: 'pointer'}}>Minchika</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===3 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(3)} style={{ cursor: 'pointer'}}>Ganye</h5> */}
            </Col>
        </Row>
        <Row className="">
            <h1 className="fs-2 mb-0 pb-0">Budget summary for {LGA}</h1>
            <hr className="mt-0 pt-0"/>
            <Col xs={12} lg={10} className="d-lg-flex justify-content-center mx-lg-auto mt-5">
                <Col xs={12} lg={6} className="me-lg-5">
                    <Card bg="state2state" className="shadow-lg rounded border-0 bg-state2state text-white">
                        <Card.Header className="text-uppercase fs-3">{LGA}</Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <h5 className="text-capitalize fw-normal">Recurrent expediture</h5>
                                <h5>
                                    <CountUpAnimation duration={1000}>{summary?.total}</CountUpAnimation>
                                </h5>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-capitalize fw-normal">Capital expediture</h5>
                                <h5>
                                    <CountUpAnimation duration={1000}>{summary?.total}</CountUpAnimation>
                                </h5>
                            </div>
                            
                            <div className="mt-3">
                                <hr className="mt-0 pt-0"/>
                                <div className="mt-3 d-flex justify-content-between">
                                    <h5 className="">Total LGA budget</h5>
                                    <h5 className="">
                                        <CountUpAnimation duration={1000}>{budgetDifference}</CountUpAnimation>
                                    </h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={5} className="mt-5 mt-lg-0">
                    <Card bg="state2state" className="shadow-lg rounded border-0 bg-state2state text-white">
                        <Card.Header className="text-uppercase fs-3 text-nowrap">{sector}</Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <h5 className="text-capitalize fw-normal">Recurrent expediture</h5>
                                <h5>
                                    <CountUpAnimation duration={1000}>{summary?.total}</CountUpAnimation>
                                </h5>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-capitalize fw-normal">Capital expediture</h5>
                                <h5 className=''>
                                    <CountUpAnimation duration={1000}>{summary?.total}</CountUpAnimation>
                                </h5>
                            </div>
                            
                            <div className="mt-3">
                                <hr className="mt-0 pt-0"/>
                                <div className="mt-3 d-flex justify-content-between">
                                    <h5 className="">Total sector budget</h5>
                                    <h5 className="">
                                        <CountUpAnimation duration={1000}>{}</CountUpAnimation>
                                    </h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Budgets