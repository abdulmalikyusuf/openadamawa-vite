import React from 'react'
import { Container, Col, Overlay, Row, Tooltip} from 'react-bootstrap';

import Table from '../components/Table';
import Form from '../components/Form';
import Summary from '../components/Summary';
import { parseTotalContractSum, parseHighestContractAmount, parseLowestContractAmount } from "../utils/parseProjectData"
import { ProjectsContext } from '../_contexts/ProjectsContext';
import adamawaMap from '../assets/adamawaMap.jpg'


function Projects() {
    const { projects, rawProjectsData } = React.useContext(ProjectsContext)
    const target = React.useRef(null)
    const [show, setShow] = React.useState(false)
    const [queryObject, setQuery] = React.useState({})
    
    const [totalProjects, setTotalProjects] = React.useState(0)
    const [totalContractSum, setTotalContractSum] = React.useState(0)
    const [highestContractAmount, setHighestContractAmount] = React.useState(0)
    const [lowestContractAmount, setLowestContractAmount] = React.useState(0)
    
    React.useEffect(()=> {
        setTotalProjects(projects.length)
        setTotalContractSum(parseTotalContractSum(rawProjectsData))
        setHighestContractAmount(parseHighestContractAmount(rawProjectsData))
        setLowestContractAmount(parseLowestContractAmount(rawProjectsData))
    }, [projects, rawProjectsData])

    React.useEffect(()=> {
        document.title = "Projects | FollowTaxes"
      }, [])

  return (
        <Container fluid="md">
            <Row className="pt-5">
                <Col>
                    <Form setQuery={setQuery}/>
                </Col>
                <Col xs={12} md={6}>
                {/* width="380" height="566" */}
                    <img src={adamawaMap} width="300" height="380" alt="Adamawa State Map" className="ms-auto mt-5" ref={target} onMouseOver={()=>setShow(!show)}/>
                    {/* <svg className='ml-auto mt-5' width="300" height="380" viewBox="0 0 198 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.5 295.2L41.4 290.9L39.3 286.4L38.3 280.9V275.2L34.3 265.6L26.2 257.9L24.2 255.4L21.2 254.1L18.6 255.3L16.9 257.8L15.1 260.1L12.9 262L10.2 261.7L7.89996 259.4L4.59998 253.4L1 244.4L1.69995 241.8L6.29999 236.4L11.7 231.5L33.2 205.6L38.8 201L39.6 198.3L39.2 195.2L39.8 189.4L48.1 172L47.6 166.1L44.2 161.8L38.9 159.3L36 154.4V151.4L36.4 148.5L35.6 145.9L34 143.4L31.2 137.3L26.4 133L23.6 132.1L20.8 131.6L18.8 129.7L11.1 115.2L18.7 114L25.8 110.8L41.2 101.5L44.3 99L45.6 95.5L45.1 84.3L46 77L59.4 77.7L70 70.2L78.6 59L83.4 54.9L89.4 53.6L96.1 52.9L102.1 50.2L104.4 47.6L105.9 44.6L108 43L111.1 42.8L116 38.4L120.5 33.1L127.3 31.5L134.5 32.5L140.1 35L144.7 39.1L149.6 42.3L155.3 43.5L159.5 41.2L162.4 29.9L167 18.5L168.1 12.6V6.79999L168.8 2L171.6 1.60001L172.8 1.8L173.7 2.60001L176.4 3.60001L179.1 3.89999L191.2 1.3L196.1 1L195.6 2L180.8 23.3L178.5 28.2L175.4 38.8L172.6 54.7L170.7 60V61.1L171.2 62.8L171.4 63.8L171.2 64.9L169.9 67.8L168.9 69L167.1 70.4L165.2 71.6L163.6 72.2L157.1 73L154.3 74L152.8 76.9L152.9 78.6L153.9 81.4L154.2 83L153.8 85L151.9 88.1L151.3 89.8L151.4 91.7L152.2 93.1L154.7 95.6L155.6 97.5L155.4 98.8L154.6 100.2L153.8 102.3L152.7 108L152.3 113.4L150 119.4L144.5 121.6L138 122.6L132.2 125.1L131.1 126L128.7 129.1L127.1 130.5L122.2 132.9L121.7 133.3L121.1 134.8L121.5 135.1L123.8 135.4L124.7 137.2L125.3 139.7L125.2 143L124.9 144.6L124.4 146L120.6 153L118.9 157L118.8 160.4L119.4 163.5L117.5 179.3L116.6 183L114.8 185.4L113.7 185.9L110.4 185.7L109.5 186.1L108.9 187.1L108.1 189.5L106.9 192.2L105.4 193.8L96.9 198.4L95.6 198.7L94.4 198.4L91.7 197.2L90.7 196.9L89.1 197.1L87.1 198.3L85.8 198.9L84.7 199L83.5 198.8L81.2 198L81.9 199.3L83.8 204L84.1 205.2V207.6L83.4 208.3L80.9 210.1L79.1 212.9L78.1 213.6L76.3 213.9L73.1 213.3L71.3 214.1L69.4 216.8L68.8 220.5L69 224.3L70.3 231.1L70.2 232.8L69.6 234.6L66.2 239.4L65.7 241.5V244.7L66.2 248L66.7 250L67 251.4L66.5 252.6L63.4 255.9L55.1 267.5L52.1 272.9L51.5 274.7L51.3 276.5L51.4 278.3L52.6 283.2L52.3 284.9L51.2 285.9L49.9 286.8L47.7 290.1L42.5 295.2V295.2Z" fill="#7C7C7C" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg> */}
                    <Overlay target={target.current} show={show}>
                        <Tooltip>
                            Adamawa
                        </Tooltip>

                    </Overlay>
                </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                  <Summary totalNumberOfProjects={totalProjects} totalContract={totalContractSum} highestContract={highestContractAmount} lowestContract={lowestContractAmount}/>
              </Col>
            </Row>
            <Table projects={projects} queries={queryObject} />
        </Container>
  );
}

export default Projects;
