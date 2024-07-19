import React from 'react';
import axios from 'axios';

const DeleteUserButton = ({ userId }) => {
  const deleteUser = async () => {
    console.log('Deleting user with ID:', userId);  // Adicione este log

    const confirmDelete = window.confirm('Você tem certeza que deseja excluir este usuário?');
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8000/users/${userId}`);
        if (response.status === 200) {
          alert('Usuário deletado com sucesso');
        } else {
          alert('Erro ao deletar usuário');
        }
      } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        alert('Erro ao deletar usuário');
      }
    }
  };

  return (
    <button onClick={deleteUser}>
      Deletar Usuário
    </button>
  );
};

export default DeleteUserButton;
