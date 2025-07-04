import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruckDetails } from "./operations";
import type { Truck, TrucksState } from "../../types/types";

const initialState: TrucksState = {
  trucks: [],          // масив
  truck: null,
  isLoading: false,
  isError: null,
  error: null,
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    clearTruck(state) {
      state.truck = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTrucks.fulfilled, (state, action: PayloadAction<Truck[]>) => {
        state.trucks = action.payload;   // масив
        state.isLoading = false;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error fetching trucks";
      })
      .addCase(fetchTruckDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchTruckDetails.fulfilled, (state, action: PayloadAction<Truck>) => {
        state.truck = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || "Error fetching truck details";
      });
  },
});

export const { clearTruck } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
