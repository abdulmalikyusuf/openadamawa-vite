import React from 'react'
import { Row, Col, Table } from "react-bootstrap"

// import {ReactComponent as Projections} from '../assets/svg/undraw_projections_re_ulc6.svg'
import Image4 from '../assets/IMG-20220830-WA0010.jpg'

import Rectangle from '../assets/MDA.png'
import govImage from '../assets/Gov.png'
import Rectangle1 from '../assets/rectangle1.jpg'


function Home() {
  React.useEffect(()=> {
    document.title = "About | FollowTaxes"
  }, [])
  return (
    <Col className="overflow-hidden">
      <Col className="bg-green4 shadow-lg text-white h-100">
        <div className="w-75 mx-auto text-center">
          <h1 className="pt-5 text-white fs-1 fw-bold">Open Adamawa</h1>
          <p className="py-5">Under the USAID Nigeria State Accountability, Transparency, and Effectiveness (State2State) Activity, Transparency and Accountability in Totality Initiative - The parent Organization of FollowTaxes and ShinKunSheda? secured a grant to implement a project on Strengthening Citizens’ Participation and Social Accountability in Revenue Generation, Budgeting, and Procurement Monitoring in Adamawa State.</p>
        </div>
      </Col>
      <Row className="mt-5 px-3 px-md-5">
        <Col xs={12}>
          <p className="fs-2 fw-bold">ADAMAWA STATE AT A GLANCE</p>
          <p className="fs-4" style={{textAlign: "justify"}}>Adamawa State Government has expressed commitment to work with the citizens to enhance governance. The state has signed up for the Open Government Partnership (OGP) and has committed to publishing procurement data in the state Open Contracting Data Standards (OCDS). These two accountability tools were meant to strengthen the Permanent Dialogue Mechanism (PDM), through which sustainable synergy between state governments and civil society can be forged to enhance service delivery and restore peace in the state and North Eastern Nigeria.</p>
        </Col>
        <Col xs={12} lg={8} className="d-flex justify-content-center align-items-center">
          {/* <img src={Image5} fetchpriority="high" className="w-100 h-75 rounded" alt="Openadamwa 1"/> */}
          {/* <Table>
            <thead>
              <td>Senatorial Districts</td>
              <td>Federal Constituencies</td>
              <td>Local Government Area</td>
              <td>Ethnic Groups</td>
            </thead>
            <tbody>
              <tr>
                <td>Adamawa North</td>
              </tr>
            </tbody>
          </Table> */}
        </Col>
      </Row>
      <Row className="d-flex mt-5 px-3 px-md-5">
        <Col xs={12} lg={6} className="order-last order-lg-first d-flex justify-content-center align-items-center">
          <img src={govImage} className="w-100 h-90 rounded" alt="Openadamwa 1"/>
        </Col>
        <Col xs={12} lg={6} className="order-first order-lg-last">
          <p className="fs-4"  fetchpriority="high" style={{textAlign: "justify"}}>The Governor of Adamawa State, Alhaji Ahmadu Fintiri, asserts that his administration firmly believes that PDM would go a long way in creating and fostering a continued synergy between government and Civil Society Organizations (CSOs) to maximize efforts to reform fiscal transparency in the states. He assures the civil society in the state that the government will continue to engage them as agents of change and public enlightenment in delivering democratic dividends to the good people of the state. Therefore, his administration welcomes constructive criticism from civil society in an objective, fair and rational manner for the betterment of society at large.</p>
        </Col>
      </Row>
      <Row className="mt-5 px-3 px-md-5">
        <Col xs={12} lg={6}>
          <p className="fs-4" style={{textAlign: "justify"}}>The Adamawa State Ministry for Local Government Affairs has been leading in the implementation of the reforms of the Executive governor of Adamawa state. Under the leadership of Hon. Mohammed Umar, the Ministry is working with CSOs and Development partners to Support the improvement of fiscal transparency and accountability across all the local governments in the state.</p>
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <img src={Rectangle}  fetchpriority="high" className="w-75 h-75 rounded" alt="Openadamwa 1"/>
        </Col>
      </Row>
     
    </Col>
    
  )
}

export default Home