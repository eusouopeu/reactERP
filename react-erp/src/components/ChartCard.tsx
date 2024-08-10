interface LineChartProps {
  title: string
  legend?: string
  children: React.ReactNode
}
export default function LineChart({ title, legend, children }: LineChartProps) {
  
  return (
    <div className='flex h-fit w-full p-[8px] bg-gradient-to-bl from-white/70 to-slate-400/50 rounded-xl'>
      <div className='flex flex-col items-start gap-[8px]'>
        <h3>{title}</h3>
        <p>{legend}</p>
      </div>
      {children}
    </div>
  )
}
