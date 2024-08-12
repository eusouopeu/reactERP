import { Box, Paper, TableContainer, Table, TableBody, TableRow, TableCell, TablePagination } from "@mui/material";
import React from "react";
import { getServidoresComRemuneracao } from "../../services/api/FetchStaff";
import { FilteredStaffModel } from "../../services/models/StaffModel";
import { Order, stableSort, getComparator } from "../../services/utils/DataTableFunctions";
import StaffTableHead from "./EnhancedTableHead";

export function StaffDataTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof FilteredStaffModel>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [rows, setRows] = React.useState<FilteredStaffModel[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof FilteredStaffModel,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServidoresComRemuneracao();
        setRows(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }} className='bg-transparent rounded-xl overflow-hidden'>
      <Paper sx={{ width: '100%', mb: 2 }} className='rounded-2xl'>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            className='bg-transparent'
          >
            <StaffTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
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
                    <TableCell align="left" padding='normal' className='w-[320px]'>{row.admissao}</TableCell>
                    <TableCell align="left" padding='normal' className='w-[220px]'>{row.cargo}</TableCell>
                    <TableCell align="left" padding='normal' className='w-[220px]'>{row.unidade}</TableCell>
                    <TableCell align="left" className='w-[110px]'>{row.admissao}</TableCell>
                    <TableCell align="left" padding='normal' className='w-[160px]'>{row.salario}</TableCell>
                  </TableRow>
                ))}
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
