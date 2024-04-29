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
      if (state.quantity > 0) {
        state.quantity--;
      }
    },
    addToCard: (state, action) => {
      state.cardItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const { product, quantity } = action.payload;
      for (let i = 0; i < quantity; i++) {
        const index = state.cardItems.findIndex(
          (item) => item.id === product.id
        );
        if (index !== -1) {
          state.cardItems.splice(index, 1);
          state.quantity--;
        }
      }
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  addToCard,
  removeFromCart,
} = cardSlice.actions;

export default cardSlice.reducer;
