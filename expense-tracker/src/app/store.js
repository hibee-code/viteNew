import { configureStore } from '@reduxjs/toolkit'
import trackReducer from '../features/reducer'

export const store = configureStore({
  reducer: {
    trackReducer:trackReducer
  },
})