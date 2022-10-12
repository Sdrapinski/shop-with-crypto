import { ConnectButton } from "@web3uikit/web3";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/Navbar.css";
import { BsBasket3 } from "react-icons/bs";
import { AppContext } from "../../appContext";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  return (
    <Row className="Navbar">
      <Col md={8}></Col>
      <Col className="shop-cart-icon" md={1}>
        <div className="shop-cart-icon-wrapper">
          <BsBasket3 fontSize={40} />
          <div className="cart_amount">{cart.length}</div>
        </div>
      </Col>
      <Col>
        <ConnectButton moralisAuth={false} />
      </Col>
    </Row>
  );
};

export default Navbar;
