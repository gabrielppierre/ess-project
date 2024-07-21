import React from 'react';
import { EquipmentModel } from '../models/Equipment';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

interface EquipmentTableProps {
  equipments: EquipmentModel[];
  onDelete: (id: string) => void;
}

const EquipmentTable: React.FC<EquipmentTableProps> = ({ equipments, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipments.map((equipment) => (
            <TableRow key={equipment.id}>
              <TableCell>{equipment.id}</TableCell>
              <TableCell>{equipment.name}</TableCell>
              <TableCell>{equipment.description}</TableCell>
              <TableCell>{equipment.amount}</TableCell>
              <TableCell>
                <Button component={Link} to={`/equipment/edit/${equipment.id}`} variant="contained" color="primary">
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(equipment.id)}
                  sx={{ ml: 2 }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EquipmentTable;
