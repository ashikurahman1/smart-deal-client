import { createBrowserRouter } from 'react-router';
import Root from '../root/Root';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/', element: <HomePage /> },
      { path: '/all-ads', element: <p>I am All Ads</p> },
      { path: '/my-ads', element: <p>I am My Adds</p> },
      { path: '/my-bids', element: <p>I am My Bids</p> },
      { path: '/create-add', element: <p>I am Create Add</p> },
    ],
  },
]);
