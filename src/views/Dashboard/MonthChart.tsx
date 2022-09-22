import React from 'react'
import { AxisOptions, Chart } from 'react-charts'

export interface MonthDataValue {
  date: Date
  income: number
  expense: number
}

interface MonthChartProps {
  data: MonthDataValue[]
}

export default function MonthChart({ data }: MonthChartProps) {
  const [activeSeriesIndex, setState] = React.useState(-1)

  const chartData = [
    {
      label: 'expenses',
      data: data.map(({ date, expense }) => ({ primary: date, secondary: expense })),
    },
    {
      label: 'income',
      data: data.map(({ date, income }) => ({ primary: date, secondary: income })),
    },
  ]

  const primaryAxis: AxisOptions<typeof chartData[number]['data'][number]> = {
    getValue: datum => datum.primary,
  }

  const secondaryAxes: AxisOptions<typeof chartData[number]['data'][number]> = {
    getValue: datum => datum.secondary,
  }

  return (
    <>
      <h1>Month chart</h1>
      <div style={{ width: '100%', height: 300, position: 'relative' }}>
        <Chart
          options={{
            data: chartData,
            primaryAxis,
            secondaryAxes: [secondaryAxes],
            getSeriesStyle: series => ({
              color: `url(#${series.label})`,
              opacity: activeSeriesIndex > -1 && series.index !== activeSeriesIndex ? 0.3 : 1,
            }),
            onFocusDatum: focused => setState(focused ? focused.seriesIndex : -1),
            renderSVG: () => (
              <defs>
                <linearGradient id='expenses' x1='0' x2='0' y1='1' y2='0'>
                  <stop offset='0%' stopColor='#ff8f10' />
                  <stop offset='100%' stopColor='#ff3434' />
                </linearGradient>
                <linearGradient id='income' x1='0' x2='0' y1='1' y2='0'>
                  <stop offset='0%' stopColor='#42E695' />
                  <stop offset='100%' stopColor='#3BB2B8' />
                </linearGradient>
              </defs>
            ),
          }}
        />
      </div>
    </>
  )
}
