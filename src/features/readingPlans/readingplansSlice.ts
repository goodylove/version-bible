import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

// const myAction = PayloadAction
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
  "readplan/fetchReadingPlans",
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
  extraReducers: (builder: any) => {
    builder.addCase(fetchReadingPlans.pending, (state: initialStateProps) => {
      state.loading = true
    })
    builder.addCase(
      fetchReadingPlans.fulfilled,
      (state: initialStateProps, action: any) => {
        state.loading = false
        state.plans = action.payload
      },
    )
    builder.addCase(
      fetchReadingPlans.rejected,
      (state: initialStateProps, action: any) => {
        state.loading = false
        state.plans = []
        state.error = action.message
      },
    )
  },
})
export default readplanSlice.reducer
