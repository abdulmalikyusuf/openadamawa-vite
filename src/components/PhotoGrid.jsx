import React from 'react'
import { Card, Col} from 'react-bootstrap'
import { FaEye, FaEyeSlash } from "react-icons/fa"

function PhotoGrid({ photo}) {
    const [fullScreen, setFullScreen] = React.useState(false)
  return (
    <Col xs={12} lg={fullScreen ? "12": "4"}>
        <Card className="text-center shadow-lg rounded border-0 bg-white" bg="">
            <Card.Header className="d-flex justify-content-end">
                {fullScreen ? <FaEyeSlash size={20} onClick={()=>setFullScreen(false)}/> :<FaEye size={20} onClick={()=>setFullScreen(true)}/>}
            </Card.Header>
            <Card.Body>

                <img src={photo} alt="LGA" className="w-100 h-100"/>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default PhotoGrid