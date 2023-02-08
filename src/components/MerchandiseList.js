import React from "react";
import PropTypes from "prop-types";
import Merchandise from "./Merchandise";

function MerchandiseList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.MerchandiseList.map((merchandise, index) =>
        <Merchandise name={merchandise.name}
        image={merchandise.image}
        text={merchandise.text}
        price={merchandise.price}
        key={index} 
        />
      )}
    </React.Fragment>
  );
}

MerchandiseList.propTypes = {
  MerchandiseList: PropTypes.array
}

export default MerchandiseList;