import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layot = () => {
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layot/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
    ]
  }
])

function App () {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router = {router}/>
      </div>
      </div>
  );
}

export default App;
