import { ConnectButton } from "@web3uikit/web3";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/Navbar.css";
import { BsBasket3 } from "react-icons/bs";
const Navbar = () => {
  return (
    <Row className="Navbar">
      <Col md={9}></Col>
      <Col md={1} style={{ flexDirection: "row-reverse", display: "flex" }}>
        <BsBasket3 fontSize={23} />
      </Col>
      <Col>
        <ConnectButton moralisAuth={false} />
      </Col>
    </Row>
  );
};

export default Navbar;
