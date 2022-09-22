// import { AxisOptions, Chart } from 'react-charts'
import { ApexOptions } from 'apexcharts'
import { formatDate } from 'helpers/date'
import Chart from 'react-apexcharts'

export interface MonthDataValue {
  date: Date
  income: number
  expense: number
}

interface MonthChartProps {
  data: MonthDataValue[]
}

export default function MonthChart({ data }: MonthChartProps) {
  const options: ApexOptions = {
    chart: { stacked: false, toolbar: { show: false }, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    colors: ['#FF1654', '#247BA0'],
    stroke: { width: [4, 4] },
    plotOptions: { bar: { columnWidth: '20%' } },
    xaxis: {
      labels: { format: 'dd/MM' },
      categories: data.map(({ date }) => formatDate(date)),
    },
    yaxis: [
      {
        axisTicks: { show: true },
        axisBorder: { show: true, color: '#FF1654' },
        labels: { style: { colors: '#FF1654' } },
        title: { text: 'Expences', style: { color: '#FF1654' } },
      },
      {
        opposite: true,
        axisTicks: { show: true },
        axisBorder: { show: true, color: '#247BA0' },
        labels: { style: { colors: '#247BA0' } },
        title: { text: 'Income', style: { color: '#247BA0' } },
      },
    ],
    tooltip: { shared: false, intersect: true, x: { show: false } },
    legend: { offsetX: 40 },
  }
  const state = {
    series: [
      {
        name: 'Expences',
        data: data.map(({ expense }) => parseFloat(expense.toFixed(3))),
      },
      {
        name: 'Income',
        data: data.map(({ income }) => parseFloat(income.toFixed(3))),
      },
    ],
  }

  const height = 300
  return (
    <>
      <h1>Month chart</h1>
      <div style={{ height }}>
        <Chart options={options} series={state.series} type='line' height={height} />
      </div>
    </>
  )
}
