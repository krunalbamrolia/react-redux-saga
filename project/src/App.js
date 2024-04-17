import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/Auth/Login';
import UserProfile from './components/Auth/UserProfile';
import AdminDashboard from './components/AdminPanel/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Switch> */}
        <Routes>
          {/* Public routes */}
          <Route path="/login" component={Login} />

          {/* Private routes */}
          <PrivateRoute path="/profile" component={UserProfile} />
          <PrivateRoute path="/admin" component={AdminDashboard} />
          
          {/* Default route */}
          <Route path="/" render={() => <h1>Welcome to the App</h1>} />
        {/* </Switch> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
