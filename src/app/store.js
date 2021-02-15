import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/features/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
