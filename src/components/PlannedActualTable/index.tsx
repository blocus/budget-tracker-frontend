import Bar from 'components/Bar'
import { PlannedAcutalValues } from 'types'

interface PlannedActualTableProps {
  data: PlannedAcutalValues[]
  currency: string
  numbersAferPoint?: number
  title: string
}

function PlannedActualTable({
  title,
  data,
  currency,
  numbersAferPoint = 3,
}: PlannedActualTableProps) {
  const totalPlanned = data.reduce((total, { planned }) => total + planned, 0)
  const totalActual = data.reduce((total, { actual }) => total + actual, 0)
  const totalDiff = totalPlanned - totalActual
  return (
    <div>
      <h1>{title}</h1>
      <Bar
        title='Planned'
        value={parseFloat(totalPlanned.toFixed(numbersAferPoint))}
        max={Math.max(totalPlanned, totalActual)}
        currency='TND'
      />
      <Bar
        title='Actual'
        value={parseFloat(totalActual.toFixed(numbersAferPoint))}
        max={Math.max(totalPlanned, totalActual)}
        currency='TND'
      />

      <div>
        {totalDiff.toFixed(numbersAferPoint)} {currency} {totalPlanned > totalActual ? '👍' : '👎'}
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th></th>
            <th>Planned</th>
            <th>Actual</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ icon, title, planned, actual }) => (
            <tr key={title}>
              <td>
                {icon} {title}
              </td>
              <td>
                {currency} {planned.toFixed(numbersAferPoint)}
              </td>
              <td>
                {currency} {actual.toFixed(numbersAferPoint)}
              </td>
              <td>
                {currency} {(planned - actual).toFixed(numbersAferPoint)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlannedActualTable
