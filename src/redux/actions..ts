export type ActionType<Data> = {
  type: string
  data?: Data
}
export type LoadingAction = ActionType<boolean>
