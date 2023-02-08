import React from "react";
import PropTypes from "prop-types";

function Merchandise(props) {
  function handleNewMerch() {
    console.log(props.object);
    props.handleAddingNewMerchToCart(props.object);
    
  }

  const merchandiseStyle = {
    backgroundColor: '#ff0000',
    display: 'block',
    fontFamily: 'monospace',
    width: '300px',
    border: '10px dotted white',
    padding: '20px',
    margin: '10px',
    fontSize: '1.25rem'
  }

  const imageStyle = {
    display: 'block',
    fontFamily: 'monospace',
    width: '150px',
    height: '225px'
  }

  const itemName = {
    fontSize: '1.8rem',
    display: 'block',
    marginBottom: '20px',
    fontWeight: '900'
  }

  return(
    <div style={merchandiseStyle}>
      <span style={itemName}>{props.name}</span>
      <div><img src={props.image} style={imageStyle}/></div>
      <span>{props.text}</span><br />
      <span>Price: ${props.price}</span><br />
      <button onClick={handleNewMerch}>Add to cart!</button>
    </div>
  );
}

Merchandise.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Merchandise;