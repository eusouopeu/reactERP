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
import { stableSort, getComparator, Order } from '../utils/DataTableFunctions';
import { staffData, staffHeader } from '../data/staffData.ts';
import { FilteredStaffModel, RawStaffModel } from '../models/StaffModel.tsx';
import { formatNumber } from 'chart.js/helpers';
import { fetchData } from '../services/api.ts';


const filterStaffData1 = (data: RawStaffModel[]): FilteredStaffModel[] => {
  return data.map((staff) => ({
    id: staff.id,
    nome: staff.nome,
    unidade: staff.uorgExercicio,
    cargo: staff.cargo,
    admissao: staff.dataIngressoCargo ? staff.dataIngressoCargo: 'Não informado',
    salario: parseFloat(staff.remuneracaoBasicaBruta.replace('.', '').replace(',', '.')),
  }));
};

const rows = filterStaffData1(staffData);


interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof FilteredStaffModel) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof FilteredStaffModel) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead className='bg-gradient-to-b from-blue-300 to-blue-500'>
      <TableRow>
        
        {staffHeader.map((headCell) => (
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




export default function StaffDataTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof FilteredStaffModel>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  React.useEffect(() => {
    fetchData();
  },[])

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof FilteredStaffModel,
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
                      key={row.nome}
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
                      <TableCell align="left" padding='normal' className='w-[320px]'>{row.nome}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[220px]'>{row.cargo}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[220px]'>{row.unidade}</TableCell>
                      <TableCell align="left" className='w-[110px]'>{row.admissao}</TableCell>
                      <TableCell align="left" padding='normal' className='w-[160px]'>R$ {formatNumber(row.salario, "pt-BR")}</TableCell>
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
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
