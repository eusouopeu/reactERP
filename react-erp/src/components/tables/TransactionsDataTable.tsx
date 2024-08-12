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
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { stableSort, getComparator, Order } from '../../services/utils/DataTableFunctions';
import { transactionsData, transactionsHeader } from '../../data/transactionsData.ts';
import { FilteredTransactionModel, RawTransactionModel } from '../../services/models/TransactionModel.ts';
import { formatNumber } from 'chart.js/helpers';
import { fetchServidores } from '../../services/api/FetchStaff.ts';


const filterTransactionData1 = (data: RawTransactionModel[]): FilteredTransactionModel[] => {
  return data.map((transaction) => ({
    id: transaction.id,
    data: transaction.dataEmissao ? transaction.dataEmissao: 'Não informado',
    fornecedor: transaction.nomeFornecedor,
    cnpj: transaction.cnpjFornecedor,
    municipio: transaction.municipioFornecedor,
    valor: parseFloat(transaction.valorNotaFiscal.replace('.', '').replace(',', '.')),
  }));
};

const rows = filterTransactionData1(transactionsData);


interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof FilteredTransactionModel) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof FilteredTransactionModel) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className='bg-gradient-to-b from-blue-300 to-blue-500'>
      <TableRow>
        
        {transactionsHeader.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
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
  const [orderBy, setOrderBy] = React.useState<keyof FilteredTransactionModel>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => {
    fetchServidores();
  },[])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof FilteredTransactionModel,
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
    <Box sx={{ width: '100%' }} className='bg-transparent rounded-xl overflow-hidden'>
      <Paper sx={{ width: '100%', mb: 2 }} className='rounded-2xl'>
        {/* <EnhancedTableToolbar numSelected={selected.length}/> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            className='bg-transparent'
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {

                  return (
                    <TableRow
                      role="checkbox"
                      tabIndex={-1}
                      key={row.fornecedor}
                      className='bg-transparent odd:bg-slate-100/40 hover:bg-blue-200'
                    >
                      
                      <TableCell
                        component="th"
                        id={row.id.toString()}
                        scope="row"
                        padding="normal"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="left" padding='normal' className='w-[120px]'>{row.data}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[420px]'>{row.fornecedor}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[170px]'>{row.cnpj}</TableCell>
                      <TableCell align="left" className='w-[160px]'>{row.municipio}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[160px]'>R$ {formatNumber(row.valor, "pt-BR")}</TableCell>
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
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className='bg-white/50'
        />
      </Paper>
    </Box>
  );
}
