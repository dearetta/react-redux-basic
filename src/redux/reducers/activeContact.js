function ActiveContact(state = null, action) {
    switch (action.type) {
      case "CONTACT_SELECTED":
        return action.payload;
      default:
        return state;
    }
  }
  
  export default ActiveContact;
  