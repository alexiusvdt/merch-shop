import React from "react";
import Header from "./Header"
import StoreControl from "./StoreControl"

function App() {
  const appStyles = {
    width: '75%',
    margin: 'auto',
    backgroundColor: "#ff820d"
  }

  return (
    <div className={appStyles}>
      <Header />
      <StoreControl />
    </div>
  )
}

export default App;
