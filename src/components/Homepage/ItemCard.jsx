import { Card } from "@web3uikit/core";
import React from "react";

const ItemCard = ({ item }) => {
  return (
    <Card className="ItemCard" title={item}>
      Twoj przedmiot do kupienia
    </Card>
  );
};

export default ItemCard;
