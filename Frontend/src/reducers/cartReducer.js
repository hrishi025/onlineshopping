const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add-to-cart':
      return [...state, action.payload]
    case 'remove-from-cart':
      return state.filter((item) => item.id != action.payload.id)
    default:
      return state
  }
}

export default cartReducer
