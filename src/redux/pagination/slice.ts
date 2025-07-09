import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  visibleCount: number;
}

const initialState: PaginationState = {
  visibleCount: 6,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setVisibleCount: (state, action: PayloadAction<number>) => {
      state.visibleCount = action.payload;
    },
    incrementVisibleCount: (state, action: PayloadAction<number>) => {
      state.visibleCount += action.payload;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = 6;
    },
  },
});

export const {
  setVisibleCount,
  incrementVisibleCount,
  resetVisibleCount,
} = paginationSlice.actions;

export default paginationSlice.reducer;
