import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import DocumentGrid from '../components/DocumentGrid'
import G21 from '../assets/pdf/G21.pdf'
import TC from '../assets/pdf/Table Content.pdf'
import YN22 from '../assets/pdf/YN22.pdf'
import YNProposed22 from '../assets/pdf/YNProposed22.pdf'
import YN21WL from '../assets/pdf/YN21WL.pdf'
import YOLANORTH2022 from '../assets/pdf/YOLA NORTH 2022.pdf'

function Budgets() {
    const [documentForLGA, setDocumentForLGA] = React.useState("yola")
    const [documents, setDocuments] = React.useState([])

    React.useEffect(()=> {
        document.title = "Budgets | FollowTaxes"
      }, [])
    React.useEffect(()=> {
        handleChange("yola")
    }, [])

    const handleChange = value => {
        switch (value) {
            case "minchika":
                setDocuments([])
                setDocumentForLGA(value)
                break;
                case "yola":
                    setDocuments([TC, YN22, YNProposed22, YN21WL, YOLANORTH2022])
                    setDocumentForLGA(value)
                    break;
                case "ganye":
                    setDocuments([G21])
                    setDocumentForLGA(value)
                break;
            default:
                break;
        }
    }
  return (
    <Container className="pt-5">
        <Row>
            <Col xs={12} lg={4} className="fw-bold text-lg-center mb-5">
                <Form.Group>
                    <Form.Label>Select LGA</Form.Label>
                    <Form.Select className="rounded-3" value={documentForLGA} onChange={(event)=> handleChange(event.target.value)}>
                        <option value="yola">Yola North</option>
                        <option value="ganye">Ganye</option>
                        <option value="minchika">Minchika</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{documents.length} Documents</h1>
            <hr className="mt-0 pt-0"/>
            {documents.map((document, idx) => <DocumentGrid document={document} key={documentForLGA+idx}/>)}
        </Row>
    </Container>
  )
}

export default Budgets