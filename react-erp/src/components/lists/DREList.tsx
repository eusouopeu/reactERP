import { Accordion, AccordionSummary, AccordionDetails, Divider, Box, ListItemText } from '@mui/material';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const formatNumber = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function DREList() {

  return (
    <section>
      <h2 className='text-start font-bold text-white'>
        Demonstração de Resultados do Exercício
      </h2>

      <Divider  />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
        <Box className='backdrop-blur-sm bg-gradient-to-b from-white/50 to-slate-200/30 rounded-xl shadow-lg overflow-hidden'>
          <Accordion>

            <Box className='bg-gradient-to-b from-emerald-400 to-emerald-600'>
              <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-white'/>}>
                <h3 className='text-white text-start'>
                  Recursos do Tesouro
                </h3>
              </AccordionSummary>
            </Box>

            <AccordionDetails className='flex flex-col text-start'>
              <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                  <h4 className=''>
                    Programa de gestão e manutenção do Poder Executivo/Operações especiais
                  </h4>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: 0.5, paddingRight: 1 }} className='flex flex-col gap-3 text-start'>

                  <Box className='flex flex-col pl-4 gap-1'>
                    <h5>
                      Previdência de inativos e pensionistas – Servidores civis
                    </h5>
                    <p>
                      {formatNumber(645951872.49)}
                    </p>
                  </Box>

                  <Divider/>

                  <Box className='flex flex-col pl-4 gap-1'>
                    <h5>
                    Participação em organismos e entidades nacionais e internacionais
                    </h5>
                    <p>
                      {formatNumber(139422.58)}
                    </p>
                  </Box>
                               
                  <Divider/>

                  <Box className='flex flex-col pl-4 gap-1'>
                    <h5>
                      Pessoal, benefícios, capacitação de servidores, custeio do PSS e auxílio-moradia
                    </h5>
                    <p>
                      {formatNumber(1000978473.99)}
                    </p>
                  </Box>

                  <Accordion elevation={0}>
                    <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                      <h5 className='text-start'>
                        Operações especiais
                      </h5>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0.5}} className='flex flex-col gap-3 text-start'>
                        <ListItemText primary='Cumprimento de sentença judicial - Precatórios' secondary={formatNumber(0.0)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>       
                        <ListItemText primary='Benefícios e pensões indenizatórias/legislação especial e/ou decisões judiciais' secondary={formatNumber(29088.0)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>       
                        <ListItemText primary='Participação em organismos e entidades nacionais e internacionais' secondary={formatNumber(139422.58)} className='flex flex-col pl-6 gap-2'/>
                        <Divider/>       
                        <ListItemText primary='Pessoal, benefícios, capacitação de servidores, custeio do PSS e auxílio-moradia' secondary={formatNumber(1000978473.99)} className='flex flex-col pl-6 gap-2'/>                
                    </AccordionDetails>
                  </Accordion>

                </AccordionDetails>
              </Accordion>

              <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                  <h4 className='text-start'>
                  Educação superior
                  </h4>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: 0.5, paddingRight: 1 }} className='flex flex-col gap-3 text-start'>

                  <Box className='flex flex-col pl-4 gap-1 pb-4'>
                    <h5>
                    Assistência ao estudante de ensino superior
                    </h5>
                    <p>
                      {formatNumber(37037933.42)}
                    </p>
                  </Box>

                  <Accordion sx={{ border: 'hidden'}} elevation={0}>
                    <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                      <h5 className='text-start'>
                      Fomento às ações de graduação, pós-graduação, ensino, pesquisa e extensão
                      </h5>
                    </AccordionSummary>
                    <AccordionDetails className='flex flex-col gap-3 text-start'>
                        <ListItemText primary='Corrente/Custeio' secondary={formatNumber(4642926.59)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Capital/Investimento' secondary={formatNumber(1849947.03)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Emendas parlamentares individuais' secondary={formatNumber(400000.0)} className='flex flex-col pl-6 gap-2'/>                
                    </AccordionDetails>
                  </Accordion>

                  <Accordion elevation={0}>
                    <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                      <h5 className='text-start'>
                        Funcionamento das Universidades Federais
                      </h5>
                    </AccordionSummary>
                    <AccordionDetails className='flex flex-col gap-3 text-start'>
                        <ListItemText primary='Corrente/Custeio' secondary={formatNumber(70602415.86)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Capital/Investimento' secondary={formatNumber(3334997.6)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Emendas parlamentares individuais' secondary={formatNumber(149927.0)} className='flex flex-col pl-6 gap-2'/>                
                    </AccordionDetails>
                  </Accordion>

                  <Accordion elevation={0}>
                    <AccordionSummary expandIcon={<ChevronDownIcon className='size-7 text-slate-600'/>}>
                      <h5 className='text-start'>
                        Reuni (Programa de Reestruturação e Expansão das Universidades Federais)
                      </h5>
                    </AccordionSummary>
                    <AccordionDetails className='flex flex-col gap-3 text-start'>
                        <ListItemText primary='Corrente/Custeio' secondary={formatNumber(20048568.0)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Capital/Investimento' secondary={formatNumber(5399791.01)} className='flex flex-col  pl-6 gap-2'/>
                        <Divider/>
                        <ListItemText primary='Emendas parlamentares individuais' secondary={formatNumber(699812.56)} className='flex flex-col pl-6 gap-2'/>                
                    </AccordionDetails>

                  </Accordion>

                </AccordionDetails>

              </Accordion>

            </AccordionDetails>

          </Accordion>
        </Box>

        <Box className='backdrop-blur-sm bg-gradient-to-b from-white/50 to-slate-200/30 rounded-xl shadow-lg overflow-hidden'>
          <Accordion>
            <AccordionSummary className='bg-gradient-to-b from-emerald-400 to-emerald-700' expandIcon={<ChevronDownIcon className='size-7 text-white'/>}>
              <h3 className='text-white text-start'>
                Recursos próprios
              </h3>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-1 text-start'>
              <h4>
                Recursos próprios
              </h4>
              <h5>
                {formatNumber(14766469.65)}
              </h5>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box className='backdrop-blur-sm bg-gradient-to-b from-white/50 to-slate-200/30 rounded-xl shadow-lg overflow-hidden'>
          <Accordion>
            <AccordionSummary className='bg-gradient-to-b from-emerald-400 to-emerald-700' expandIcon={<ChevronDownIcon className='size-7 text-white'/>}>
              <h3 className='text-white text-start'>
                Recursos de convênios / descentralizações
              </h3>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col pl-4 gap-1 text-start'>
              <h4>
                Recursos de convênios / descentralizações
              </h4>
              <h5>
                {formatNumber(14766469.65)}
              </h5>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box className='backdrop-blur-sm bg-gradient-to-b from-white/50 to-slate-200/30 rounded-xl shadow-lg overflow-hidden'>
          <Accordion>
            <AccordionSummary className='bg-gradient-to-b from-emerald-400 to-emerald-700' expandIcon={<ChevronDownIcon className='size-7 text-white'/>}>
              <h3 className='text-white text-start'>
                Recursos FNS/SUS
              </h3>
            </AccordionSummary>
            <AccordionDetails className='flex flex-col gap-1 text-start'>
              <h4>
                Recursos FNS/SUS
              </h4>
              <h5>
                {formatNumber(14766469.65)}
              </h5>
            </AccordionDetails>
          </Accordion>
        </Box>

      </Box>
    </section>
  );
};
