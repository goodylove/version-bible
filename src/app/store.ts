import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import readPlanReducer from "../features/readingPlans/readingplansSlice"
import logger from "redux-logger"

// import rootReducer from "./reducer"

export const store = configureStore({
  reducer: {
    readplan: readPlanReducer,
  },
})

export type AppDispatch = ReturnType<typeof store.dispatch>
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>
