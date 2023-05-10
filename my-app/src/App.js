import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Article from './pages/Article/Article';
import Favorite from './pages/Favorite/Favorite';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Routes from './pages/Routes/Routes';
import Contacts from './pages/Contacts/Contacts';
import Basket from './pages/Basket/Basket';
import Header2 from './components/Header/Header2';
const LayotHome = () => {
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};
const Layot = () => {
  return(
    <>
    <Header2/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayotHome/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
    ],},
    {path: "/",
    element: <Layot/>,
    children:[
      {
        path:"/article",
        element:<Article/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/routes",
        element: <Routes />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/favourite",
        element: <Favorite />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/basket",
        element: <Basket/>,
      },
    ]
  },
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
