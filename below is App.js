below is App.js code
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

i have below code of Approutes.js
const AppRoutes = () => {
    
    return (
        <Routes>
          <Route path="/*" element={<RenderRoutes routes={ROUTES} />} />
        </Routes>
      );
};

export default AppRoutes;

now i have made below routes.js File

function RouteWithSubRoutes(route) {
    return (
        <Route
          path={route.path}
          element={<route.component />}
        >
          {route.routes && route.routes.map((subRoute) => (
            <RouteWithSubRoutes key={subRoute.key} {...subRoute} />
          ))}
        </Route>
      );

  }

export function RenderRoutes({ routes }) {

    return routes.map((route) => (
        <Route key={route.key} path={route.path} element={<route.component />}>
          {route.routes && <RenderRoutes routes={route.routes} />}
        </Route>
      ));

}

const ROUTES = [
    // { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
    { path: "/", key: "ROOT", exact: true, component: Home },
    { path: "/login", key: "LOGIN", exact: true, component: () => <Login /> },
    { path: "/contact", key: "CONTACT", exact: true, component: () => <Contact /> },
    { path: "/page1", key: "PAGE1", exact: true, component: () => <Page1 /> },
    { path: "/page2", key: "PAGE2", exact: true, component: () => <Page2 /> },
    {
      path: "/about",
      key: "ABOUT",
      component: About,
      routes: [
        { path: "team", key: "ABOUT_TEAM", component: AboutTeam },
        { path: "company", key: "ABOUT_COMPANY", component: AboutCompany },
      ],
    },
    { path: "/users", key: "USERS", exact: true, component: () => <Users /> },
    { path: "/user/:id", key: "USER_DETAILS", exact: true, component: () => <UserDetails /> },
    { path: "/products", key: "PRODUCTS", exact: true, component: () => <Products /> },
    { path: "/product/:id", key: "PRODUCT_DETAILS", exact: true, component: () => <ProductDetails /> },
    {
      path: "/todos",
      key: "TODOS",
      exact: true,
      component: () => <ProtectedRoute><Todos /></ProtectedRoute>,
    },
    {
      path: "/profile",
      key: "PROFILE",
      exact: true,
      component: () => <ProtectedRoute><Profile /></ProtectedRoute>,
    },
    { path: "/dashboard/*", key: "DASHBOARD", component: Dashboard },
  ];

export default ROUTES;

for above all implementaion i am getting below error , which you have to identify and fix
Uncaught runtime errors:
×
ERROR
A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.
    at invariant (http://localhost:3000/static/js/bundle.js:3790:11)
    at Route (http://localhost:3000/static/js/bundle.js:43209:78)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:27390:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:31361:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:32664:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:17646:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:17690:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:17747:35)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:37645:11)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:36893:16)

     