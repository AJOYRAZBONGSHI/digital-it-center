import React from "react";
import "./Service.css";
import { Card, Col, Row } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, duration, price, tutor, rating, img, toots } =
    props.course || {};
  return (
    <div className="single-course">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card className="p-3 my-3 mx-auto bg-light card">
              <Card.Img className="img mx-auto" variant="top" src={img} />
              <Card.Body>
                <Card.Title>Course name : {name}</Card.Title>
                <Card.Title>Teacher : {tutor}</Card.Title>
                <Card.Title>Time : {duration}</Card.Title>
                <Card.Title>Software : {toots}</Card.Title>
                <Card.Title>Rating : {rating}</Card.Title>
                <Card.Title> Price : {price}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;
