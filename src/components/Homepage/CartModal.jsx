import { Modal } from "@web3uikit/core";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AppContext } from "../../appContext";

const CartModal = ({ isVisible, onClose }) => {
  const { cart, RemoveItemFromCart } = useContext(AppContext);

  const [rerender, setrerender] = useState(0);

  const handleRemoveItem = (index) => {
    RemoveItemFromCart(index);
    console.log(cart);
    setrerender((prev) => prev + 1);
  };

  return (
    <Modal
      isVisible={isVisible}
      onCancel={onClose}
      onCloseButtonPressed={onClose}
      okText="Buy"
    >
      {cart.length === 0 ? (
        <div>No items in Cart</div>
      ) : (
        <ul className="modal__itemList">
          {cart.map((item, index) => (
            <li key={index}>
              <Row>
                <Col md={2}>
                  {" "}
                  {item.price} ETH {item.name}
                </Col>
                <Col md={7} />
                <Col md={3}>
                  <Button
                    onClick={() => handleRemoveItem(index)}
                    variant="danger"
                  >
                    Cancel item
                  </Button>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  );
};

export default CartModal;
