/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { stableSort, getComparator, Order } from '../../services/utils/DataTableFunctions';
import { transactionsHeader } from '../../data/transactionsData.ts';
import { NumericFormat } from 'react-number-format';
import { Divider, ListItemText } from '@mui/material';
import { fetchNotasFiscais, NotaFiscal } from '../../services/api/FetchReceipts.ts';




interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof NotaFiscal) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof NotaFiscal) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className='w-fit'>
      <TableRow sx={{ position: 'fixed', top: 40, display: 'flex', gap: 2 }}>
        
        {transactionsHeader.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ paddingX: 2, border: 'none', fontSize: 18, fontWeight: 800, color: 'white' }}
            className='flex content-center w-full bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full shadow-lg'
            >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}




export default function TransactionDataTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof NotaFiscal>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [rows, setRows] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchNotasFiscais()
    .then(notas => {
      setRows(notas)
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  },[])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof NotaFiscal,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box className='z-10 flex flex-col w-fit gap-[10px] bg-transparent rounded-xl overflow-y-scroll'>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 250 }}
            aria-labelledby="tableTitle"
            className='bg-transparent'
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody sx={{ display: 'flex', flexDirection: 'column', gap: 2, border: 'none' }} >
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {

                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', border: 'hidden', borderRadius: 4, backdropFilter: 'blur(16px)' }}
                      className='flex flex-col justify-start content-start items-start max-sm:w-[400px] md:w-full bg-gradient-to-b from-white/40 to-slate-300/30 shadow-xl overflow-hidden text-start '
                    >
                      <Box className='flex justify-between w-full'>

                        <TableCell component="th" id={row.id.toString()} scope="row" sx={{ height: 50, border: 'none', fontSize: 18, fontWeight: 800, color: 'white' }} className='flex content-center py-[0px] bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-br-2xl'>
                          {row.id}
                        </TableCell>


                        <TableCell align="left" sx={{ height: 50, width: 190, border: 'none', fontSize: 18, fontWeight: 800, color: 'white' }} className='bg-gradient-to-b from-emerald-300 to-emerald-700 rounded-bl-2xl'>
                          R$ <NumericFormat value={row.valor} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true} />
                        </TableCell>

                      </Box>

                      <TableCell align="left" sx={{ border: 'none', fontWeight: 700 }} >
                        {row.nomeFornecedor}
                      </TableCell>

                      <Box className='flex justify-around w-full'>
                        <TableCell align="left" sx={{ border: 'none' }}>
                          <ListItemText primary='CNPJ: ' secondary={row.cnpjFornecedor} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} />
                        </TableCell>
                        <TableCell align="left" sx={{ border: 'none' }} >
                          <ListItemText primary='Data: ' secondary={row.dataEmissao} sx={{ display: 'flex', alignItems: 'center', gap: 1 }} />
                        </TableCell>
                      </Box>


                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                style={{
                  height: (53) * emptyRows,
                }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className='bg-white/50 pt-[20px] rounded-xl'
        />

    </Box>
  );
}
