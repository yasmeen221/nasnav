import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quantity: 0,
  cardItems: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      state.quantity++;
    },
    decrementQuantity: (state, action) => {
      state.quantity--;
    },
    addToCard: (state, action) => {
      // const { quantity } = action.payload;
      const newItem = {
        id: state.cardItems.length + 1,
        quantity: action.payload.quantity,
      };
      (state.cardItems = [...state.cardItems, newItem]),
        console.log("Added to card:", state.cardItems);
    },
  },
});

export const { incrementQuantity, decrementQuantity, addToCard } =
  cardSlice.actions;

export default cardSlice.reducer;
