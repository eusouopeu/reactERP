import clsx from "clsx"

interface LineChartProps {
  title: string
  className?: string
  children: React.ReactNode
}
export default function LineChart({ title, className, children }: LineChartProps) {
  
  return (
    <div className={clsx('flex flex-col h-fit p-[8px] gap-[12px] bg-gradient-to-bl from-white/70 to-slate-200/70 rounded-xl', className)}>
      <div className='flex flex-col items-start gap-[8px] pl-[12px]'>
        <h3 className="text-[24px] text-slate-600 font-bold italic">{title}</h3>
      </div>
      {children}
    </div>
  )
}
