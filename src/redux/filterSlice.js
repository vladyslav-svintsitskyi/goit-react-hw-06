import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const selectFilter = (state) => state.filters.filters.name;

export const { setFilter } = slice.actions;
