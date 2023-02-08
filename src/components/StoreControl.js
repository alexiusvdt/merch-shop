import React from "react";
import MerchandiseList from "./MerchandiseList";
import Cart from "./Cart";

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartVisibleOnPage: false,
      cartContents: []
    };
  }

  handleClick = () => { // for switching between cart/merch list + store merch
    this.setState(prevState => ({
      cartVisibleOnPage: !prevState.cartVisibleOnPage
    })); 
  }

  handleAddingNewMerchToCart = (newMerch) => {
    const newCart = this.state.cartContents.concat(newMerch);
    this.setState({cartContents: newCart,
                  cartVisibleOnPage: false}) // i am assuming we want to have users manually click into cart?
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.cartVisibleOnPage) {
      currentlyVisibleState = <Cart cartContents={this.state.cartContents} />
      buttonText = "return to store"; 
    } else {
      currentlyVisibleState = <MerchandiseList handleAddingNewMerchToCart={this.handleAddingNewMerchToCart} />
      buttonText = "view my cart"; //later make this an image of a shopping cart...?
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default StoreControl;