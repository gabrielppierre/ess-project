// src/app/home/pages/User/DeleteUserPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import DeleteUserButton from '../../components/DeleteUserButton';

const DeleteUserPage = () => {
  const { userId } = useParams();
  console.log('User ID from URL:', userId);  // Adicione este log

  return (
    <div>
      <h1>Excluir Usuário</h1>
      <DeleteUserButton userId={userId} />
    </div>
  );
};

export default DeleteUserPage;
