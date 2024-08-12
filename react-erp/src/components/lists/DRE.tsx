import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const ufbaDREData = {
  "Recursos do Tesouro": {
    'Programa de gestão e manutenção do Poder Executivo/Operações especiais': {
      'Previdência de inativos e pensionistas – Servidores civis': 645951872.49,
      'Operações especiais': {
        'Cumprimento de sentença judicial - Precatórios': 0.0,
        'Benefícios e pensões indenizatórias/legislação especial e/ou decisões judiciais': 29088.0,
      },
      'Participação em organismos e entidades nacionais e internacionais': 139422.58,
      'Programa de gestão e manutenção do MEC': {
        'Pessoal, benefícios, capacitação de servidores, custeio do PSS e auxílio-moradia': 1000978473.99,
      },
    },
    'Educação superior': {
      'Assistência ao estudante de ensino superior': 37037933.42,
      'Fomento às ações de graduação, pós-graduação, ensino, pesquisa e extensão': {
        'Corrente/Custeio': 4642926.59,
        'Capital/Investimento': 1849947.03,
        'Emendas parlamentares individuais': 400000.0,
      },
      'Funcionamento das Universidades Federais': {
        'Corrente/Custeio': 70602415.86,
        'Capital/Investimento': 3334997.6,
        'Emendas parlamentares individuais': 149927.0,
      },
      'Reuni (Programa de Reestruturação e Expansão das Universidades Federais)': {
        'Corrente/Custeio': 20048568.0,
        'Capital/Investimento': 5399791.01,
        'Emendas parlamentares individuais': 699812.56,
      },
    },
  },
  'Recursos próprios': 14766469.65,
  'Recursos de convênios/descentralizações': 43332151.37,
  'Recursos FNS/SUS': 158521673.98,
};

const formatNumber = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const DRE = () => {
  return (
    <section >
      <h4 className='text-start'>
        Demonstração de Resultados do Exercício (DRE)
      </h4>
      <div >
        {Object.entries(ufbaDREData).map(([mainCategory, subcategories]) => (
          <div className='bg-gradient-to-b from-white/70 to-slate-200/50 overflow-hidden rounded-xl'>
          <Accordion key={mainCategory} sx={{ mb: 1, borderRadius: 35, backgroundColor: 'transparent', overflow: 'hidden' }}>
            <AccordionSummary
              className='rounded-xl'
              expandIcon={<ChevronDownIcon />}
              aria-controls={`${mainCategory}-content`}
              id={`${mainCategory}-header`}
            >
              <Typography variant="h6">{mainCategory}</Typography>
            </AccordionSummary>
            <AccordionDetails >
              {typeof subcategories === 'object' ? (
                <div>
                  {Object.entries(subcategories).map(([category, subcatValues]) => (
                    <div className='flex flex-col gap-[8px]'>
                      <h5 className='text-[18px] text-start text-slate-500 italic font-bold'>
                        {category}
                      </h5>
                      {typeof subcatValues === 'object' ? (
                        Object.entries(subcatValues).map(([item, value]) => (
                          <div className='flex flex-col items-start
                           gap-[8px]' >
                            <h5 className='text-[16px] font-bold text-start'>{item}</h5>
                            <p className='text-right italic'>
                                {formatNumber(value)}
                              </p>
                          </div>
                        ))
                      ) : (
                        <div className='flex flex-col gap-[8px]'>
                          <h5 className='text-[16px] font-bold'>{category}</h5>
                          <p className='text-left'>
                              {formatNumber(subcatValues)}
                            </p>
                        </div>
                      )}
                      <Divider />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='flex flex-col items-start
                           gap-[8px]' >
                            <h5 className='text-[16px] font-bold text-start'>{mainCategory}</h5>
                            <p className='text-right italic'>
                                {formatNumber(subcategories)}
                              </p>
                          </div>
              )}
            </AccordionDetails>
          </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DRE;
