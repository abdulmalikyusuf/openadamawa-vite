import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import PhotoGrid from '../components/PhotoGrid'
import Scan1 from "../assets/cdp/Scan1.jpg"
import Scan2 from "../assets/cdp/Scan2.jpg"
import Scan3 from "../assets/cdp/Scan3.jpg"
import Scan4 from "../assets/cdp/Scan4.jpg"
import Scan5 from "../assets/cdp/Scan5.jpg"
import Scan6 from "../assets/cdp/Scan6.jpg"
import Scan7 from "../assets/cdp/Scan7.jpg"
import Scan8 from "../assets/cdp/Scan8.jpg"
import Scan9 from "../assets/cdp/Scan9.jpg"
import Scan10 from "../assets/cdp/Scan10.jpg"
import Scan11 from "../assets/cdp/Scan11.jpg"
import Scan12 from "../assets/cdp/Scan12.jpg"
import Scan13 from "../assets/cdp/Scan13.jpg"
import Scan14 from "../assets/cdp/Scan14.jpg"
import Scan15 from "../assets/cdp/Scan15.jpg"
import Scan16 from "../assets/cdp/Scan16.jpg"
import Scan17 from "../assets/cdp/Scan17.jpg"
import Scan18 from "../assets/cdp/Scan18.jpg"
import Scan19 from "../assets/cdp/Scan19.jpg"
import Scan20 from "../assets/cdp/Scan20.jpg"
import Scan21 from "../assets/cdp/Scan21.jpg"
import Scan22 from "../assets/cdp/Scan22.jpg"
import Scan23 from "../assets/cdp/Scan23.jpg"
import Scan24 from "../assets/cdp/Scan24.jpg"
import Scan25 from "../assets/cdp/Scan25.jpg"
import Scan26 from "../assets/cdp/Scan26.jpg"
import Scan27 from "../assets/cdp/Scan27.jpg"
import Scan28 from "../assets/cdp/Scan28.jpg"
import Scan29 from "../assets/cdp/Scan29.jpg"
import Scan30 from "../assets/cdp/Scan30.jpg"
import Scan31 from "../assets/cdp/Scan31.jpg"
import Scan32 from "../assets/cdp/Scan32.jpg"
import Scan33 from "../assets/cdp/Scan33.jpg"
import Scan34 from "../assets/cdp/Scan34.jpg"
import Scan35 from "../assets/cdp/Scan35.jpg"
import Scan36 from "../assets/cdp/Scan36.jpg"
import Scan37 from "../assets/cdp/Scan37.jpg"
import Scan38 from "../assets/cdp/Scan38.jpg"
import Scan40 from "../assets/cdp/Scan40.jpg"
import Scan41 from "../assets/cdp/Scan41.jpg"
import Scan42 from "../assets/cdp/Scan42.jpg"
import Scan43 from "../assets/cdp/Scan43.jpg"
import Scan44 from "../assets/cdp/Scan44.jpg"
import Scan45 from "../assets/cdp/Scan45.jpg"
import Scan46 from "../assets/cdp/Scan46.jpg"
import Scan47 from "../assets/cdp/Scan47.jpg"
import Scan49 from "../assets/cdp/Scan49.jpg"
import Scan50 from "../assets/cdp/Scan50.jpg"


function Community() {
    const [photoForLGA, setPhotoForLGA] = React.useState("yola")
    const [photos, setPhotos] = React.useState([])

    React.useEffect(()=> {
        handleChange("yola")
    }, [])

    React.useEffect(()=> {
        document.title = "Community Dev. Plan | FollowTaxes"
      }, [])

    const handleChange = value => {
        switch (value) {
            case "minchika":
                setPhotos([Scan1, Scan2, Scan3, Scan4, Scan5, Scan6, Scan7, Scan8, Scan9, Scan10, Scan11, Scan12])
                setPhotoForLGA(value)
                break;
                case "yola":
                    setPhotos([Scan13, Scan14, Scan15, Scan16, Scan17, Scan18, Scan19, Scan20, Scan21, Scan22, Scan23,
                        Scan24, Scan25, Scan26, Scan27, Scan28, Scan29, Scan30])
                    setPhotoForLGA(value)
                    break;
                case "ganye":
                setPhotoForLGA(value)
                setPhotos([Scan31, Scan32, Scan33, Scan34, Scan35, Scan36, Scan37, Scan38, Scan40, Scan41,
                    Scan42, Scan43, Scan44, Scan45, Scan46, Scan47, Scan49, Scan50])
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
                    <Form.Select className="rounded-3" value={photoForLGA} onChange={(event)=> handleChange(event.target.value)}>
                        <option value="yola">Yola North</option>
                        <option value="ganye">Ganye</option>
                        <option value="minchika">Minchika</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{photos.length} Photos</h1>
            <hr className="mt-0 pt-0"/>
            {photos.map((photo, idx) => <PhotoGrid photo={photo} key={photoForLGA+idx}/>)}
        </Row>
    </Container>
  )
}

export default Community