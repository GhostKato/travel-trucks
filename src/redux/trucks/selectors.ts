import type { RootState } from "../store";

export const selectTrucks = (state: RootState) => state.trucks.trucks;  // тепер це масив
export const selectTruck = (state: RootState) => state.trucks.truck;
export const selectIsLoading = (state: RootState) => state.trucks.isLoading;
export const selectError = (state: RootState) => state.trucks.error;
