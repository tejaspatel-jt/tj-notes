// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'; // Import your components
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProtectedRoute from './ProtectedRoute';
import Todos from '../pages/Todos';
import Profile from '../pages/Profile';
import Login from '../Login';
import Header from '../components/Header';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import NotFound from '../pages/NotFound';
import AboutTeam from '../pages/AboutTeam';
import AboutCompany from '../pages/AboutCompany';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
import Dashboard from '../pages/Dashboard';


const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <NotFound /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  {
      path: "/about",
      element: <About />,
      children: [
          { path: "team", element: <AboutTeam /> },
          { path: "company", element: <AboutCompany /> }
      ]
  },
  { path: "/Users", element: <Users /> },
  { path: "/user/:id", element: <UserDetails /> },
  { path: "/Products", element: <Products /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "dashboard/*", element: <Dashboard /> },
  { path: "/todos", element: <ProtectedRoute><Todos /></ProtectedRoute> },
  { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> }
];

const RenderRoutes = () => (
  <Routes>
      {ROUTES.map((route) => (
          route.children ? (
              <Route key={route.path} path={route.path} element={route.element}>
                  {route.children.map((child) => (
                      <Route key={child.path} path={child.path} element={child.element} />
                  ))}
              </Route>
          ) : (
              <Route key={route.path} path={route.path} element={route.element} />
          )
      ))}
  </Routes>
);

export default RenderRoutes;

i am using above thing in my AppRoutes.js file
import  RenderRoutes  from './routes';

const AppRoutes = () => {
    RenderRoutes();
};

export default AppRoutes;

and i am using above AppRoutes in my App.js file below way
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import HeaderWrapper from './components/HeaderWrapper';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <div>
      <AuthProvider>
        <Router>

          {/* This will help us to conditionally render Header in the pages we want */}
          <HeaderWrapper />

          {/* All the routes are inside this */}
          <AppRoutes/>

        </Router>
      </AuthProvider>
    </div>
  )

}

export default App;


Please optimize all this structure if you can

mainly i want to optimize RenderRoutes function from routes.js File
and i want seprate out function from it like RouteWithSubRoutes to avoid multiple mapping within single function.
