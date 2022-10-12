import { Card } from "@web3uikit/core";
import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="ItemCard__wrapper">
      <Card className="ItemCard" title={item}>
        <img src="https://via.placeholder.com/240" />
        <div className="ItemCard__context">Twoj przedmiot do kupienia</div>
      </Card>
    </div>
  );
};

export default ItemCard;
