const initialState = {
   text: '',
 };
 
 const showReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'ADD':
       return { ...state, text: action.payload };
     default:
       return state;
   }
 };
 
 export default showReducer;
 