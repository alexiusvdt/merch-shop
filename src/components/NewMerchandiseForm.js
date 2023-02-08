import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewMerchandiseForm(props){

  function handleNewMerchandiseFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchandiseCreation({
      name: event.target.name.value, 
      image: event.target.image.value, 
      text: event.target.text.value, 
      price: event.target.price.value, 
      id: v4()
  });

  return (
    <div>
      <form onSubmit={handleNewMerchandiseFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Pair Names' />
        <input
          type='text'
          name='image'
          placeholder='image' />
        <textarea
          name='text'
          placeholder='Describe your text.' />
          <input
          type='number'
          name='price'
          placeholder='price' />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}
}

NewMerchandiseForm.propTypes = {
  onNewMerchandiseCreation: PropTypes.func
};


export default NewMerchandiseForm;