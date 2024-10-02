import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,  
    errorElement: <ErrorPage />,  
  },
  {
    path: '/character/:id',
    element: <About />,  
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
