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
    let buttonClass = null;
    let myStyledComponentStyles = {
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      paddingBottom: '50px'
    }

    let myStyledComponentButton = {
      width: '500px',
      padding: '20px',
      display: 'block',
      margin: 'auto',
      marginTop: "50px",
      fontSize: "1.5rem"
    }

    if (this.state.cartVisibleOnPage) {
      currentlyVisibleState = <Cart cartContents={this.state.cartContents} />
      buttonText = " Return to store"; 
      buttonClass = "bi bi-shop";
    } else {
      currentlyVisibleState = <MerchandiseList handleAddingNewMerchToCart={this.handleAddingNewMerchToCart} />
      buttonText = " View your cart"; //later make this an image of a shopping cart...?
      buttonClass = "bi bi-cart";
    }
    return (
      <React.Fragment>
      <div style={myStyledComponentStyles}>
        {currentlyVisibleState}
        <button style={myStyledComponentButton} onClick={this.handleClick} className={buttonClass}>{buttonText}</button>
      </div>
      </React.Fragment>
    )
  }
}

export default StoreControl;