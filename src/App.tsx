import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Preload from './pages/Preload';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Preload />
  },
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