import React from "react";
import PropTypes from "prop-types";

function Merchandise(props) {
  return(
    <React.Fragment>
      <h4>{props.name}</h4><br />
      <div>{props.image}</div>
      <span>{props.text}</span>
      <span>{props.price}</span>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.float.isRequired
};

export default Merchandise;