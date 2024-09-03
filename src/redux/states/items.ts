import { Item } from '../../models';
import { createSlice } from '@reduxjs/toolkit';

export const ItemEmptyState: Item[] = [];

export const itemsSlice = createSlice({
  name: 'items',
  initialState: ItemEmptyState,
  reducers: {
    createItems: (state, action) => action.payload,
    resetItems: () => ItemEmptyState
  }
});

export const { createItems } = itemsSlice.actions;

export default itemsSlice.reducer;