const reducer = (state = {}, action) => {
  const { name, image, text, price, id } = action;
  switch (action.type) {
    case 'ADD_MERCHANDISE':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          image: image,
          text: text,
          price: price,
          id: id
        }
      });
    case 'DELETE_MERCHANDISE':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
