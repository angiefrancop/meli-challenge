
import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './states/items';

export interface AppStore {
  items: any;
}

export default configureStore<AppStore>({
  reducer: {
    items: itemsSlice.reducer
  }
});
