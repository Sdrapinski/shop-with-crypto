import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";
import "../../style/Homepage.css";
import items from "../../constants/items.json";

const HomeWrapper = () => {
  const itemArray = items;

  return (
    <Container>
      <Row>
        {itemArray.items.map((item) => (
          <Col md={3} key={item.ID} style={{ marginTop: "50px" }}>
            {" "}
            <ItemCard item={item} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeWrapper;
