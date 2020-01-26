import { createStore } from "redux"
import { loadingReducer } from "./reducers"

export const store = createStore(loadingReducer)
