import Bar from 'components/Bar'

interface SummaryProps {
  income: number
  expenses: number
}

function Summary({ income, expenses }: SummaryProps) {
  return (
    <div>
      <h1>Summary</h1>
      <Bar
        title='Income'
        currency={'TND'}
        value={parseFloat(income.toFixed(3))}
        max={Math.max(income, expenses)}
      />
      <Bar
        title='Expenses'
        currency={'TND'}
        value={parseFloat(expenses.toFixed(3))}
        max={Math.max(income, expenses)}
      />
      {income <= 0 && expenses <= 0 ? (
        <div>
          ❗️Oops! It looks like your income and/or expenses are less than or equal to $0. Ensure
          that your transactions are properly copied and loading below, then try again!
        </div>
      ) : (
        <div>
          {income > expenses
            ? '🔥 Woohoo! Your income was greater than your expenses this month. What are you going to do with the savings?'
            : "💩 Oh no! It looks like you spent more than you earned this month. It's OK though, take a close look at your expenses and see how you might be able to save next time 😉"}
        </div>
      )}
    </div>
  )
}

export default Summary
