import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomePage from '../pages/HomePage';
import AllAdds from '../pages/AllAdds';
import MyAdds from '../pages/MyAdds';
import MyBids from '../pages/MyBids';
import CreateAdd from '../pages/CreateAdd';
import ProductDetails from '../pages/ProductDetails';
import Bid from '../pages/Bid';
import AuthLayout from '../pages/AuthLayout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/', element: <HomePage /> },
      { path: '/all-ads', element: <AllAdds /> },
      { path: '/my-ads', element: <MyAdds /> },
      { path: '/my-bids', element: <MyBids /> },
      { path: '/create-add', element: <CreateAdd /> },
      { path: '/product-details', element: <ProductDetails /> },
      { path: '/bid', element: <Bid /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
    ],
  },
]);
