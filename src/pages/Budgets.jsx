import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import CountUpAnimation from "../components/Counter"

const LGAs = ["All LGAs", "Jimeta", "Minchika", "Ganye"]

function Budgets() {
    const [LGA, setLGA] = React.useState(0)
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
  return (
    <Container className="pt-5">
        <Row>
            <Col xs={12} lg={4} className="d-flex mb-5 fs-2">
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===0 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(0)} style={{ cursor: 'pointer'}}>All</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===1 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(1)} style={{ cursor: 'pointer'}}>Jimeta</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===2 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(2)} style={{ cursor: 'pointer'}}>Minchika</h5>
                <h5 className={`fs-5 me-2 me-md-4 ${ LGA===3 &&  "border-bottom pb-2 border-3"}`} onClick={()=>handleChange(3)} style={{ cursor: 'pointer'}}>Ganye</h5>
            </Col>
        </Row>
        <Row className="g-5">
            <h1 className="fs-2 mb-0 pb-0">Expenditure summary for {LGAs[LGA]}</h1>
            <hr className="mt-0 pt-0"/>
            <Col xs={12} lg={6} className="mx-lg-auto">
                <Card bg="state2state" className="shadow-lg rounded border-0 bg-state2state text-white p-2" bg="">
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <h4 className="fs-5">Total budget</h4>
                            <h5>
                                <CountUpAnimation duration={1000}>{summary?.total}</CountUpAnimation>
                            </h5>
                        </div>
                        <div className="mt-5 d-flex justify-content-between">
                            <h4 className="fs-5">Expenditure</h4>
                            <h5>
                                <CountUpAnimation duration={1000}>{summary?.spent}</CountUpAnimation>
                            </h5>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <h6 className="fs-6 me-5">{budgetDifference>0 ? "Surplus": "Deficit"}</h6>
                            <h5 className={`${budgetDifference < 0 ? "text-danger": "text-success"}`}>
                                <CountUpAnimation duration={1000}>{budgetDifference}</CountUpAnimation>
                            </h5>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Budgets