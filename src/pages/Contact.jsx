import React from 'react'
import { Row, Col, Form, Container } from "react-bootstrap"

import BusinessAnalytics from '../assets/svg/undraw_questions_re_1fy7.svg'
import { ProjectsContext } from '../_contexts/ProjectsContext';


function Contact() {
    const { lgas } = React.useContext(ProjectsContext)
    const [lga, setLGA] = React.useState(lgas?.[0]?.name)

    React.useEffect(()=> {
        document.title = "Contact | FollowTaxes"
    },[])
  return (
    <Container className="py-5">
        <Row className="">
            <Col xs={12} lg={8}>
                <p className="fw-bold fs-5">Do you have any emerging issue or complain that requires stackeholders/government intervention? Kindly fill out this form.</p>
            </Col>
            
            <Col xs={12} lg={8} className="">
                <Col xs={12} lg={8}>
                    <Form.Group className="mb-2" controlId="formBasicState">
                        <Form.Select className="rounded" disabled={!lgas} name="lga" value={lga} onChange={(e)=> setLGA(e.target.value)}>
                        <option value={""}>{lgas ? "Select LGA": "Loading.."}</option>
                            {lgas?.map(lga => (
                            <option key={lga.id} value={lga.name}>{lga.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} lg={8}>
                    <Form.Group className="mb-2">
                        {/* <Form.Label>State</Form.Label> */}
                        <Form.Control type="text" placeholder="Your Ward" className="rounded"></Form.Control>
                    </Form.Group>
                
                </Col>
                <Col xs={12} lg={8}>
                    <Form.Group className="mb-2">
                        {/* <Form.Label>State</Form.Label> */}
                        <Form.Control as="textarea" rows={5} placeholder="Your complain area" className="rounded"></Form.Control>
                    </Form.Group>
                
                </Col>
                <Col xs={12} lg={8}>
                    <Form.Group className="mb-2">
                        {/* <Form.Label>State</Form.Label> */}
                        <Form.Control type="text" placeholder="Your Phone Number" className="rounded"></Form.Control>
                    </Form.Group>
                
                </Col>
                <Col xs={12} lg={8}>
                    <Form.Group className="mb-2">
                        {/* <Form.Label>State</Form.Label> */}
                        <Form.Control type="email" placeholder="Your Email Address" className="rounded"></Form.Control>
                    </Form.Group>
                
                </Col>
            </Col>
            <Col xs={12} lg={4} cl>
                <img src={BusinessAnalytics} className="w-100 h-100"/>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact