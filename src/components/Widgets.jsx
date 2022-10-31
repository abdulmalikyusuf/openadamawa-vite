import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { formatDigits } from '../utils/parseProjectData';

import { BarChart, CircleChart, LineChart, AreaChart } from './Charts';
import Dropdown from './Dropdown';

export const BarChartWidget = (props) => {
  const componentRef = React.useRef();
  const { title, labels = [], series=[] } = props;
  
  return (
    <Card border="light" className="shadow" ref={componentRef}>
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0 border-bottom">
        <h5 className="fw-bold text-gray mb-2">{title}</h5>
        <div>
          <Dropdown elementRef={componentRef} chartTitle={title}/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
      <BarChart title={title} labels={labels} series={series}/>
      </Card.Body>
    </Card>
  );
};

export const PieChartWidget = (props) => {
  const componentRef = React.useRef();
  const { title, labels = [], series = [], data = [] } = props;
  const colors = data.map(d => d.chartColor);

  return (
    <Card border="light" className="shadow" ref={componentRef}>
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0 border-bottom">
        <h5 className="fw-bold mb-2">{title}</h5>
        <div>
        <Dropdown elementRef={componentRef} chartTitle={title}/>
        </div>
      </Card.Header>
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} labels={labels} colors={colors}/>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <p className="mb-3">{title}</p>
            {labels.map((label, idx) => (
              <p key={`circle-element-${label}`} className="fw-bold">
                {/* <d.icon className={`icon icon-xs w-20 me-1`} /> */}
                {`${label} - `}{`${formatDigits(series[idx])}`}
              </p>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const LineChartWidget = (props) => {
  const componentRef = React.useRef();
  const { title, labels, series } = props;
  return (
    <Card border="light" className="shadow" ref={componentRef}>
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0">
          <h5 className="fw-bold mb-2">
            {title}
          </h5>
        <div>
          <Dropdown elementRef={componentRef} chartTitle={title}/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <LineChart labels={labels} series={series} title={title}/>
      </Card.Body>
    </Card>
  );
};

export const AreaChartWidget = (props) => {
  const componentRef = React.useRef();
  const { title, labels, series } = props;
  return (
    <Card border="light" className="shadow" ref={componentRef}>
      <Card.Header className="d-flex flex-row justify-content-between align-items-center flex-0">
        <h5 className="fw-bold mb-2">{title}</h5>
        <div>
          <Dropdown elementRef={componentRef} chartTitle={title}/>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <AreaChart labels={labels} series={series} title={title}/>
      </Card.Body>
    </Card>
  );
};