import { ActiveLangAction, LoadingAction } from "./actions."

import { ActiveLang } from "../assets/translations"

const initialState: ReduxState = {
  isLoading: false,
  activeLang: "en",
}

export type ReduxState = {
  isLoading: boolean
  activeLang: ActiveLang
}

export const reducer = (state = initialState, action: LoadingAction | ActiveLangAction): ReduxState => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true }
    case "STOP_LOADING":
      return { ...state, isLoading: false }
    case "SET_LANGUAGE":
      return { ...state, activeLang: (action.data && typeof action.data === "string" && action.data) || "en" }
    default:
      return state
  }
}
