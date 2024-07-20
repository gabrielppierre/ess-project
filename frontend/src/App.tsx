import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './app/home/pages/HomePage';
import CreateTest from './app/home/pages/CreateTest';
import ListTests from './app/home/pages/ListTests';
import AddUserPage from './app/home/pages/User/AddUserPage';
import UpdateUserPage from './app/home/pages/User/UpdateUserPage';
import DeleteUserPage from './app/home/pages/User/DeleteUserPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/create-test',
    Component: CreateTest,
  },
  {
    path: '/tests',
    Component: ListTests,
  },
  {
    path: '/users',
    Component: AddUserPage,
  },
  {
    path: '/users/:userId/update',
    Component: UpdateUserPage,
  },
  {
    path: '/users/delete/:userId',
    Component: DeleteUserPage,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
