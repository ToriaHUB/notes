import { LoadingAction } from "./actions."

const initialState = {
  isLoading: false,
}

export type ReduxState = {
  isLoading: boolean
}

export const loadingReducer = (state = initialState, action: LoadingAction): ReduxState => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true }
    case "STOP_LOADING":
      return { ...state, isLoading: false }
    default:
      return state
  }
}
