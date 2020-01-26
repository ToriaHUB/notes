import moment from "moment"

export const parseDate = (date: string): string => {
  return moment(date).format("DD.MM.YYYY hh:mm")
}

export const truncateString = (string: string): string => {
  if (string.length > 18) {
    return `${string.slice(0, 17)}...`
  } else {
    return string
  }
}
