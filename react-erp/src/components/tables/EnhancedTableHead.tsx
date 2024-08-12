import * as React from 'react';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { FilteredStaffModel, StaffModelHeader } from '../../services/models/StaffModel.tsx';


const staffHeader: StaffModelHeader[] = [
{ id: 'id', numeric: true, label: 'ID', disablePadding: false },
  { id: 'nome', numeric: false, label: 'Nome', disablePadding: false },
  { id: 'cargo', numeric: false, label: 'Cargo', disablePadding: false },
  { id: 'unidade', numeric: false, label: 'Unidade', disablePadding: false },
  { id: 'admissao', numeric: false, label: 'Admissão', disablePadding: false },
  { id: 'salario', numeric: true, label: 'Salário', disablePadding: false },
];


interface StaffTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof FilteredStaffModel) => void;
  order: 'asc' | 'desc';
  orderBy: keyof FilteredStaffModel;
}

function StaffTableHead(props: StaffTableProps) {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof FilteredStaffModel) => (event: React.MouseEvent<unknown>) => {
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

export default StaffTableHead;
