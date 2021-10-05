import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./SubHome.css";

const SubHome = (props) => {
  const { img, name } = props.course || {};
  // console.log(props);
  return (
    <div>
      <Row xs={1} md={2} className="g-2">
        <Col>
          <Card className="p-3 bg-light card">
            <Card.Img className="img mx-auto" variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className='text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button className="mt-2" variant="primary">
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SubHome;
