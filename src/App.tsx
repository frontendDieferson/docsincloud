import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path:'/home',
    element:<Home />
  },
  {
    path: '/login',
    element:<Login />
  }
])

export {router}