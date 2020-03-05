import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
// import 'materialize-css'

import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/NavBar";
import {Leftbar} from "./components/Leftbar";

function App() {
     const {token, login, logout, userId} = useAuth();
     const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
  return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
        <Router>
            {isAuthenticated && <Navbar/>}
          <div>
            {routes}
          </div>
        </Router>
      </AuthContext.Provider>
  )
}

export default App;
