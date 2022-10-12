import { Card } from "@web3uikit/core";
import React, { useContext } from "react";
import { AppContext } from "../../appContext";

const ItemCard = ({ item }) => {
  const { AddToCart } = useContext(AppContext);
  return (
    <div onClick={() => AddToCart(item)} className="ItemCard__wrapper">
      <Card className="ItemCard" title={item}>
        <img src="https://via.placeholder.com/240" alt="img placeholder" />
        <div className="ItemCard__context">Twoj przedmiot do kupienia</div>
      </Card>
    </div>
  );
};

export default ItemCard;
