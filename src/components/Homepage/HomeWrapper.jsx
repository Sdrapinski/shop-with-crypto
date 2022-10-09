import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";
import "../../style/Homepage.css";

const HomeWrapper = () => {
  const NumberOfItems = [
    "apple",
    "orange",
    "car",
    "PC",
    "TV",
    "Mug",
    "cactus",
    "thing",
  ];
  return (
    <Container>
      <Row>
        {NumberOfItems.map((item) => (
          <Col style={{ marginTop: "50px" }}>
            {" "}
            <ItemCard item={item} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeWrapper;
