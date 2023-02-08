import React from "react";
import PropTypes from "prop-types";
import Merchandise from "./Merchandise";

function MerchandiseList(props){

  const mainMerchandiseList = [
  {
    name: "whatever",
    image: "https://oldschool.runescape.wiki/images/Gnome_child_chathead.png",
    text: "whatever is a really great product!",
    price: 75,
  },
  {
    name: "rune$cape gold",
    image: "https://static.wikia.nocookie.net/2007scape/images/6/63/Coins_detail.png",
    text: "get rich quick!",
    price: 69.99,
  },
  {
    name: "unicron",
    image: "https://static.wikia.nocookie.net/runescape2/images/d/df/Black_Unicorn.png",
    text: "(just a picture not the horse....)",
    price: 7500000,
  },
  ];

  return (
    <React.Fragment>
      <hr/>
      {mainMerchandiseList.map((merchandise, index) =>
        <Merchandise name={merchandise.name}
        image={merchandise.image}
        text={merchandise.text}
        price={merchandise.price}
        key={index} 
        object={merchandise}
        handleAddingNewMerchToCart={props.handleAddingNewMerchToCart}
        />
      )}
    </React.Fragment>
  );
}

MerchandiseList.propTypes = {
  MerchandiseList: PropTypes.array
}

export default MerchandiseList;