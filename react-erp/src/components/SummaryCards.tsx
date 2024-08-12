interface SummaryCardsProps {
  title: string
  value: string
  extra?: string
}
export default function SummaryCards({ title, value, extra }: SummaryCardsProps) {
  return (
    <div className='flex flex-col items-start w-full md:w-fit min-w-[150px] p-[12px] bg-gradient-to-b from-white/70 to-slate-300/50 rounded-xl'>
      <h5 className='text-[18px] italic font-semibold text-black'>{title}</h5>
      <h3 className='text-[34px] font-extrabold text-blue-800'>{value}</h3>
      <div className='flex flex-row gap-[16px]'>
        {extra}
      </div>
    </div>
  )
}
