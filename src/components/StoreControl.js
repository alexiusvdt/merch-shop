import React from "react";

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
    const newCart = this.state.cartContents.concat(newCart);
    this.setState({cartContents: newCart,
                  cartVisibleOnPage: false}) // i am assuming we want to have users manually click into cart?
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.cartVisibleOnPage) {
      currentlyVisibleState = //cart
      buttonText = "return to store"; 
    } else {
      currentlyVisibleState = // store / merchandise
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