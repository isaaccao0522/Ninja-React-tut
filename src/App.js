import { Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom';

//Others
import './App.scss';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>  
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/create',
          element: <Create />
        },
        {
          path: '/blogs/:id',
          element: <BlogDetails />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    } 
  ]);

  return (

      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
};


export default App;
