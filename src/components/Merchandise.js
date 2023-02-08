import React from "react";
import PropTypes from "prop-types";

function Merchandise(props) {
  function handleNewMerch() {
    console.log(props.object);
    props.handleAddingNewMerchToCart(props.object);
    
  }
  return(
    <React.Fragment>
      <h4>{props.name}</h4><br />
      <div><img src={props.image} /></div>
      <span>{props.text}</span><br />
      <span>Price: {props.price}</span><br />
      <button onClick={handleNewMerch}>Add to cart!</button>
    </React.Fragment>
  );
}

Merchandise.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Merchandise;