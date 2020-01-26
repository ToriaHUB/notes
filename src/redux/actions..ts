import { ActiveLang } from "../assets/translations"

export type ActionType<Data> = {
  type: string
  data?: Data
}
export type LoadingAction = ActionType<boolean>

export type ActiveLangAction = ActionType<ActiveLang>
