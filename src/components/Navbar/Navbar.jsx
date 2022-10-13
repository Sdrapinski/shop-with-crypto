import { ConnectButton } from "@web3uikit/web3";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../../style/Navbar.css";
import { BsBasket3 } from "react-icons/bs";
import { AppContext } from "../../appContext";
import CartModal from "../Homepage/CartModal";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const [showModal, setshowModal] = useState(false);
  const hideModal = () => setshowModal(false);

  const handleShowModalClick = () => {
    setshowModal(true);
  };

  return (
    <Row className="Navbar">
      <CartModal isVisible={showModal} onClose={hideModal} />
      <Col xxl={8} lg={7} md={6} sm={2}></Col>
      <Col className="shop-cart-icon" md={1}>
        <div onClick={handleShowModalClick} className="shop-cart-icon-wrapper">
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
