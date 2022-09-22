export const getDays = (month: number, year?: number): number => {
  return new Date(year ?? new Date().getFullYear(), month + 1, 0).getDate()
}
