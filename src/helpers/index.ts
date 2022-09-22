export const getDays = (month: number): number => {
  return new Date(new Date().getFullYear(), month, 0).getDate()
}
