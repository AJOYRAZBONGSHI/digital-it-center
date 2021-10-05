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
                <Card.Title>
                  <i className="fas fa-graduation-cap"></i>{" "}
                  <span>Course name : {name}</span>
                </Card.Title>
                <Card.Title>
                  <i className="fas fa-chalkboard-teacher"></i>{" "}
                  <span>Teacher : {tutor}</span>
                </Card.Title>
                <Card.Title>
                  <i className="far fa-clock"></i>{" "}
                  <span>Duration : {duration}</span>
                </Card.Title>
                <Card.Title>
                  <i className="fas fa-laptop"></i> <span>Software : {toots}</span>
                </Card.Title>
                <Card.Title>
                  <span>Rating : {rating}</span> <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </Card.Title>
                <Card.Title>
                  {" "}
                  <i className="fas fa-dollar-sign"></i>{" "}
                  <span>Price : {price}</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;
