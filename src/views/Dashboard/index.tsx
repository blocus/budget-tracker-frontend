import { expenseCategories, incomeCategories } from 'data'
import { getDays } from 'helpers'
import { useMemo } from 'react'
import { PlannedAcutalValues } from 'types'
import { MonthDataValue } from './MonthChart'
function Dashboard() {
  const expenses: PlannedAcutalValues[] = useMemo(
    () =>
      expenseCategories.map(({ icon, title }) => ({
        icon,
        title,
        planned: Math.random() * 1000,
        actual: Math.random() * 1000,
      })),
    []
  )

  const incomes: PlannedAcutalValues[] = useMemo(
    () =>
      incomeCategories.map(({ icon, title }) => ({
        icon,
        title,
        planned: Math.random() * 1000,
        actual: Math.random() * 1000,
      })),
    []
  )

  const monthData: MonthDataValue[] = useMemo(
    () =>
      Array.from({ length: getDays(new Date().getMonth()) }).map((_, day) => ({
        date: new Date(new Date().getFullYear(), new Date().getMonth(), day + 1),
        income: Math.random() * 100,
        expense: Math.random() * 100,
      })),
    []
  )
}

export default Dashboard
