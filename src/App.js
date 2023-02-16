import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { DetailProduct, Home, Login, Register } from './pages';
import CartCustomer from './pages/cartCustomer';

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
    path: '/product/:id',
    element: (
      <Layout>
        <DetailProduct />
      </Layout>
    )
  },
  {
    path: '/cart/:id',
    element: (
      <Layout>
        <CartCustomer />
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
