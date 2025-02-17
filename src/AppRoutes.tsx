import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Dashboard from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import RegisterPage from '@/pages/RegisterPage';
import MainLayout from '@/templates/MainLayout';
import ErrorPage from './pages/ErrorPage';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <>
        <h1>Oops something went wrong!</h1>
      </>
    ),
  },
];

export default createBrowserRouter(appRoutes);
