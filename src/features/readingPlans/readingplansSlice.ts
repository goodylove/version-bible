import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type planProps = {
  plans: string
}

type initialStateProps = {
  loading: boolean
  plans: []
  error: string
}
const initialState: initialStateProps = {
  loading: false,
  plans: [],
  error: "",
}

export const fetchReadingPlans = createAsyncThunk(
  "plan/fetchReadingPlans",
  () => {
    return axios
      .get("http://localhost:3004/readingplans")
      .then((respond) => respond.data)
  },
)

const readplanSlice = createSlice({
  name: "readplan",
  initialState,
  reducer: {},
  extraReducer: (builder: any) => {
    builder.addCase(fetchReadingPlans.pending, (state: initialStateProps) => {
      state.loading = true
    })
    builder.addCase(
      fetchReadingPlans.fuilled,
      (state: initialStateProps, action: PayloadAction) => {
        state.loading = false
        state.plans = action.payload
      },
    )
  },
})
