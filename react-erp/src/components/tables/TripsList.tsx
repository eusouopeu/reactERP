// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import TablePagination from '@mui/material/TablePagination';
// import { fetchTrips } from '../../services/api/FetchTrips'; // Substitua pelo caminho correto
// import { TripModel } from '../../services/models/TripsModel';
// import { List, ListItem, ListItemText, Typography } from '@mui/material';
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

// const

// export default function TripsList() {
//   const [viagens, setViagens] = useState<TripModel[]>([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [orderBy, setOrderBy] = useState<keyof TripModel>('dataInicioAfastamento');
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');

//   useEffect(() => {
//     fetchTrips()
//       .then((data) => setViagens(data))
//       .catch((error) => console.error('Erro:', error));
//   }, []);

//   const handleRequestSort = (property: keyof TripModel) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const sortedTrips = viagens.slice().sort((a, b) => {
//     if (order === 'asc') {
//       return a[orderBy] > b[orderBy] ? 1 : -1;
//     } else {
//       return a[orderBy] < b[orderBy] ? 1 : -1;
//     }
//   });


//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - viagens.length) : 0;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box className='flex justify-between p-4 bg-gray-800 rounded-t-lg'>
//         <Typography className='cursor-pointer' onClick={() => handleRequestSort('dataInicioAfastamento')}>
//           Data Início
//           {orderBy === vdataInicioAfastamento && (order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />)}
//         </Typography>
//         <Typography className='cursor-pointer' onClick={() => handleRequestSort('dataFimAfastamento')}>
//           Data Fim
//           {orderBy === 'dataFimAfastamento' && (order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />)}
//         </Typography>
//         <Typography className='cursor-pointer' onClick={() => handleRequestSort('beneficiario.nome')}>
//           Beneficiário
//           {orderBy === 'beneficiario.nome' && (order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />)}
//         </Typography>
//         <Typography className='cursor-pointer' onClick={() => handleRequestSort('cargo.descricao')}>
//           Cargo
//           {orderBy === 'cargo.descricao' && (order === 'asc' ? < ChevronUpIcon /> : <ChevronDownIcon />)}
//         </Typography>
//         <Typography className='cursor-pointer' onClick={() => handleRequestSort('valorTotalViagem')}>
//           Valor Total
//           {orderBy === 'valorTotalViagem' && (order === 'asc' ? <ChevronUpIcon /> : <ChevronDownIcon />)}
//         </Typography>
//       </Box>


//       <List className='flex flex-col w-full gap-[20px] *:text-slate-700'>
//         {viagens.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((viagem) => (
//           <ListItem  key={viagem.id} className='flex flex-col bg-gradient-to-b from-white/70 to-slate-200/50 rounded-xl shadow-lg'>
//             <Box className='flex w-full justify-between'>
//               <ListItemText primary='ID: ' secondary={viagem.id} className='flex items-center gap-2' />
//               <ListItemText primary='ID: ' secondary={viagem.dataInicioAfastamento} className='flex items-center gap-2' />
//               <ListItemText primary='ID: ' secondary={viagem.dataFimAfastamento} className='flex items-center gap-2' />
//             </Box>

//             <Box className='flex justify-between w-full'>
//               <ListItemText primary='Beneficiário: ' secondary={viagem.beneficiario.nome} className='flex items-center gap-2' />
//               <ListItemText primary='Cargo: ' secondary={viagem.cargo.descricao} className='flex items-center gap-2' />
//             </Box>

//             <Box className='flex justify-between w-full'>
//               <ListItemText primary='Valor Diárias: ' secondary={viagem.valorTotalDiarias} className='flex items-center gap-2' />
//               <ListItemText primary='Valor Passagem: ' secondary={viagem.valorTotalPassagens} className='flex items-center gap-2' />
//               <ListItemText primary='Valor Total: ' secondary={viagem.valorTotalDiarias} className='flex items-center gap-2' />
//             </Box>

//             <ListItemText primary='Motivo: ' secondary={viagem.viagem.motivo} className='flex flex-col w-full' />
//           </ListItem>
//         ))}
//         {emptyRows > 0 && (
//           <ListItem style={{ height: 53 * emptyRows }}>
//             <div  />
//           </ListItem>
//         )}
//       </List>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={viagens.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Box>
//   );
// }
