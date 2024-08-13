interface SummaryCardsProps {
  title: string
  value: string
  extra?: string
}
export default function SummaryCards({ title, value, extra }: SummaryCardsProps) {
  return (
    <div className='summary-card'>
      <h5 className='text-[18px] italic font-semibold text-black'>{title}</h5>
      <h3 className='text-[34px] font-extrabold text-blue-800'>{value}</h3>
      <div className='flex flex-row gap-[16px]'>
        {extra}
      </div>
    </div>
  )
}
