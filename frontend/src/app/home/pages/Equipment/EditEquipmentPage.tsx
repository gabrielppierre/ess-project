import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EditEquipmentForm from '../../forms/EditEquipmentForm';
import { EquipmentModel } from '../../models/Equipment';
import { Container, Typography, Box } from '@mui/material';

const EditEquipmentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [equipment, setEquipment] = useState<EquipmentModel | null>(null);
  const navigate = useNavigate();

  const fetchEquipment = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/equipment/${id}`);
      setEquipment(response.data);
    } catch (error) {
      console.error('Failed to fetch equipment', error);
    }
  };

  const handleEdit = async (updatedEquipment: EquipmentModel) => {
    try {
      await axios.put(`http://localhost:8000/equipment/${id}`, updatedEquipment);
      navigate('/equipment'); // Redirect back to equipment list
    } catch (error) {
      console.error('Failed to update equipment', error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Editar Equipamento
      </Typography>
      <Box mb={2}>
        {equipment && (
          <EditEquipmentForm equipment={equipment} onSubmit={handleEdit} />
        )}
      </Box>
    </Container>
  );
};

export default EditEquipmentPage;
