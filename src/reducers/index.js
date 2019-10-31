const reducer = (state = [] , action) => {
    switch (action.type) {
      case 'ALL_POST':
        return { ...state, loading: true, callDone: true };
      case 'USER_LIKES':
        return { ...state, temp: action.json, loading: false }
      default:
        return state;
   }
 };
 export default reducer;