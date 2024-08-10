interface SummaryCardsProps {
  title: string
  value: string
  extra?: string
}
export default function SummaryCards({ title, value, extra }: SummaryCardsProps) {
  return (
    <div className='flex flex-col items-start w-full md:w-fit min-w-[160px] p-[12px] bg-gradient-to-bl  from-white/50 to-slate-300/50 rounded-xl'>
      <h5 className='italic font-semibold'>{title}</h5>
      <h3 className='font-extrabold text-blue-800'>{value}</h3>
      <div className='flex flex-row gap-[16px]'>
        {extra}
      </div>
    </div>
  )
}
