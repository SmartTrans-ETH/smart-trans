import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import GlobalStyles from './styles/global';
import Auth from './pages/auth/Auth';
import Signup from './pages/signup/Signup';
import withContexts from './HOC/withContexts';
import Dashboard from './pages/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RedirectComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/auth');
  }, []);
  return <span>Redirecting...</span>;
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RedirectComponent />,
    },
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);
  
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default withContexts(App);
