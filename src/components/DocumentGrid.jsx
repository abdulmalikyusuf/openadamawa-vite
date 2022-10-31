import React from 'react'
import { Card, Col} from 'react-bootstrap'

import Lightbox from '../utils/Lightbox';


function DocumentGrid({ document }) {
    return (
      <Col xs={12} lg={8} className="mx-lg-auto">
          <Card className="text-center shadow-lg rounded border-0 bg-white p-2" bg="">
              <Card.Body>
                <div id="adobe-dc-view" className="">
                  <Lightbox url={document}/>
                </div>
              </Card.Body>
          </Card>
      </Col>
  )
}

export default DocumentGrid