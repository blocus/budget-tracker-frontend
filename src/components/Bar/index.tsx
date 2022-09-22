interface BarProps {
  max: number
  value: number
  color?: string
  title: string
  currency: string
}

function Bar({ max, value, title, currency }: BarProps) {
  return (
    <div>
      {title} <progress max={max} value={value} /> {value} {currency}
    </div>
  )
}

export default Bar
