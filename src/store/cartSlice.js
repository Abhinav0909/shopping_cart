import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity:0,
    total: 0,
  },
  reducers: {
    add(state, action) {
      state.cartItems.forEach((item)=>{
        if(item.id === action.payload.id ){
          alert("Item have been added to cart before");
          return;
        }
      })
      state.cartItems.push(action.payload);
      action.payload.quantity = 1;
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
       cartItem.quantity = cartItem.quantity + 1;
    },
    decrease(state, action) {
     const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotal(state) {
      let total = 0;
        let qty = 0;
      state.cartItems.forEach((item) => {
        qty +=  item.quantity ;
        total += item.quantity *item.price;

      });
      state.quantity =  qty;
      state.total = total;
    },
  },
});
export const { add, remove, calculateTotal, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
