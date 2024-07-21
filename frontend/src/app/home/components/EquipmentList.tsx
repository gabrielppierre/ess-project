// src/app/home/components/EquipmentList.tsx
import React from 'react';
import { EquipmentModel } from '../models/Equipment';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface EquipmentListProps {
  equipments: EquipmentModel[];
  onDelete: (id: string) => void;
  onEdit: (equipment: EquipmentModel) => void;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipments, onDelete, onEdit }) => {
  return (
    <Box>
      <List>
        {equipments.map((equipment) => (
          <ListItem key={equipment.id}>
            <ListItemText
              primary={equipment.name}
              secondary={`Description: ${equipment.description || 'N/A'}, Amount: ${equipment.amount}`}
            />
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(equipment)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(equipment.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EquipmentList;
