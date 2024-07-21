import React, { useState, useEffect } from 'react';
import EquipmentForm from '../../components/EquipmentForm';
import EquipmentList from '../../components/EquipmentList';
import { EquipmentModel } from '../../models/Equipment';
import { Container, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';

const EquipmentManagerPage: React.FC = () => {
  const [equipments, setEquipments] = useState<EquipmentModel[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentModel | null>(null);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const response = await axios.get('http://localhost:8000/equipment/');
      setEquipments(response.data);
    } catch (err) {
      setError('Erro ao carregar equipamentos.');
      console.error(err);
    }
  };

  const handleAdd = async (equipment: Omit<EquipmentModel, 'id' | 'created_at'>) => {
    try {
      await axios.post('http://localhost:8000/equipment/', { ...equipment, created_at: new Date().toISOString() });
      fetchEquipments();
      setMessage('Equipamento adicionado com sucesso!');
      setError('');
      setSelectedEquipment(null);
    } catch (err) {
      setError('Erro ao adicionar equipamento.');
      setMessage('');
      console.error(err);
    }
  };

  const handleEdit = async (equipment: EquipmentModel) => {
    try {
      await axios.put(`http://localhost:8000/equipment/${equipment.id}`, equipment);
      fetchEquipments();
      setMessage('Equipamento atualizado com sucesso!');
      setError('');
      setSelectedEquipment(null);
    } catch (err) {
      setError('Erro ao atualizar equipamento.');
      setMessage('');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/equipment/${id}`);
      fetchEquipments();
      setMessage('Equipamento removido com sucesso!');
      setError('');
    } catch (err) {
      setError('Erro ao remover equipamento.');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Equipamentos
      </Typography>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box mb={4}>
        <EquipmentForm
          onSubmit={selectedEquipment ? handleEdit : handleAdd}
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />
      </Box>
      <EquipmentList equipments={equipments} onDelete={handleDelete} onEdit={setSelectedEquipment} />
    </Container>
  );
};

export default EquipmentManagerPage;
