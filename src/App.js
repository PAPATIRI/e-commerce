import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { Home, Login, Register } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
