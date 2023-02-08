import React from "react";
import Merchandise from "./Merchandise";

function Cart(props){

  return (
    <React.Fragment>
      <h1>this is the cart</h1>
        {props.cartContents.map((merch, index) => // loop through list passed down from Merchandise
        <Merchandise name={merch.name}
          image={merch.image}
          text={merch.text}
          price={merch.price}
          key={index}/>
        )}
    </React.Fragment>
  )
}

export default Cart;