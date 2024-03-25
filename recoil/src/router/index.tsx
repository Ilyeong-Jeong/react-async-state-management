import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('@/App'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  }
]);

export default router;