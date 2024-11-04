import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Reservation from './components/Reservation';
import OrderOnline from './components/OrderOnline';
import Footer from './components/Footer';
import Menu from './components/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
const DefaultContent = () => {
  return (
    <div>
      <h2>Welcome to the Main Page</h2>
      <p>This is the about section of our application.</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <DefaultContent />
      </Layout>
    ),
  },
  {
    path: 'reservation',
    element: (
      <Layout>
        <Reservation />
      </Layout>
    ),
  },
  {
    path: 'order-online',
    element: (
      <Layout>
        <OrderOnline />
      </Layout>
    ),
  },
  {
    path: 'menu',
    element: (
      <Layout>
        <Menu />
      </Layout>
    ),
  },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
