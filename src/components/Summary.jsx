import React from 'react'
import { Col, Row, Card} from 'react-bootstrap'
import { FaCog, FaBriefcase, FaMoneyBill } from 'react-icons/fa'

import CountUpAnimation from "./Counter"


const Summary = ({ totalNumberOfProjects, totalContract, highestContract, lowestContract }) => {
    const cards = [
        {title: "Total number of projects", value: totalNumberOfProjects, bgColor: "bg-pacific-blue", icon: FaCog, showNaira: false},
        {title: "Total contract sum", value: totalContract, bgColor: "bg-green2", icon: FaMoneyBill, showNaira: true},
        {title: "Highest contract amount", value: highestContract, bgColor: "bg-granny-smith-apple", icon: FaBriefcase, showNaira: true},
        {title: "Lowest contract amount", value: lowestContract, bgColor: "bg-viridian-green", icon: FaBriefcase, showNaira: true}
    ]
  return (
        <Col lg={8} className="ms-lg-auto">
            <Row>
            {cards.map(card => (
                <Col key={card.title} xs={12} lg={6} className="mb-3">
                    <Card className={`text-center shadow rounded border-0 ${card.bgColor}`} bg="">
                        <Card.Body>
                            <div className='p-4 px-sm-1 text-white d-flex justify-content-between align-items-center'>
                                <card.icon size={"40"} className='text-danger text-white'/>
                                <h3>
                                    {card.showNaira && <span className='text-decoration-line-through fw-bold'>N</span>}
                                    <CountUpAnimation duration={1000}>{card.value}</CountUpAnimation>
                                </h3>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-start text-white bg-primary opacity-25 rounded-bottom">{card.title}</Card.Footer>
                    </Card>
                </Col>  
            ))}
            </Row>
        </Col>        
  )
}

export default Summary