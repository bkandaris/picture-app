import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/features/appSlice';
import cameraReducer from '../features/features/cameraSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer
  },
});
