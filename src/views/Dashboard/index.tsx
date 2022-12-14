import PlannedActualTable from 'components/PlannedActualTable'
import { currency, expenseCategories, incomeCategories } from 'data'
import { getDays } from 'helpers'
import { useMemo } from 'react'
import { PlannedAcutalValues } from 'types'
import MonthChart, { MonthDataValue } from './MonthChart'
import Summary from './Summary'

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
        planned: Math.random() * 10000,
        actual: Math.random() * 10000,
      })),
    []
  )

  const monthData: MonthDataValue[] = useMemo(
    () =>
      Array.from({ length: getDays(new Date().getMonth()) }).map((_, day) => ({
        date: new Date(new Date().getFullYear(), new Date().getMonth(), day + 1),
        income: Math.random() * 1000,
        expense: Math.random() * 100,
      })),
    []
  )

  return (
    <main>
      <Summary
        income={incomes.reduce((total, { actual }) => total + actual, 0)}
        expenses={expenses.reduce((total, { actual }) => total + actual, 0)}
      />
      <MonthChart data={monthData} />
      <PlannedActualTable title='Income' data={incomes} currency={currency} />
      <PlannedActualTable title='Expenses' data={expenses} currency={currency} />
    </main>
  )
}

export default Dashboard
