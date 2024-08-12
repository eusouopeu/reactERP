import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Divider, List, ListItem, ListItemText } from '@mui/material';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { contractsData } from '../data/contractsData'; // Supondo que você tenha um arquivo de dados semelhante
import { formatNumber } from 'chart.js/helpers';

const ContractsList = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant='h4' component='h1'>Contratos</Typography>
          <IconButton>
            <BookOpenIcon />
          </IconButton>
        </Box>
        <Divider />
        <List className='flex flex-col w-[calc(100vw-800px)] gap-[20px]'>
          {contractsData.map((contract) => (
            <ListItem key={contract.id} className='flex flex-col w-full bg-gradient-to-b from-white/70 to-slate-200/50 rounded-xl *:text-slate-800'>
              <div className='flex justify-between w-full gap-[10px]'>
                <ListItemText primary='ID:' className='flex items-center gap-[10px]' secondary={contract.id} />
                <ListItemText primary='Modalidade:' className='flex items-center gap-[10px]' secondary={contract.modalidadeLicitacao} />
              </div>
              <div className='flex justify-between w-full gap-[10px]'>
                <ListItemText primary='Unidade:' className='flex w-[500px] items-center gap-[10px]' secondary={contract.unidadeGestora.nome} />
              </div>
              <div className='flex justify-between w-full gap-[10px]'>
                <ListItemText primary='Publicação:' className='flex items-center gap-[10px]' secondary={contract.dataPublicacao} />
                <ListItemText primary='Valor:' className='flex items-center gap-[10px]' secondary={`R$ ${formatNumber(contract.valor, 'pt-BR')}`} />
              </div>
              <ListItemText primary='Descrição:' className='flex flex-col w-full' secondary={contract.licitacao.objeto} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default ContractsList;
