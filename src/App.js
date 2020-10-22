import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { extractSessionStorage } from './components/Shared/SessionManagement/SessionManagement';
import ServiceListCard from './components/Order/ServiceListCard/ServiceListCard';
import HomePage from './components/HomePage/HomePage/HomePage';
import OrderForm from './components/Order/OrderForm/OrderForm';
import LoginDesign from './components/LoginDesign/LoginDesign/LoginDesign';
import AdminServiceList from './components/Order/AdminServiceList/AdminServiceList';
import PrivateRoute from './components/LoginDesign/PrivateRoute/PrivateRoute';
import Review from './components/Order/Review/Review';
import AddService from './components/Order/AddService/AddService';
import MakeAdmin from './components/Order/MakeAdmin/MakeAdmin';

export const signedUserContext = createContext();

function App() {

  const [signedUser, setSignedUser] = useState(extractSessionStorage('signeduser') || {});
  const [token, setToken] = useState(extractSessionStorage('authToken' || ''));

  return (
    <Router>
      <signedUserContext.Provider value={[signedUser, setSignedUser, token, setToken]}>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>

          <Route path='/login'>
            <LoginDesign></LoginDesign>
          </Route>

          <PrivateRoute path='/order'>
            <OrderForm></OrderForm>
          </PrivateRoute>

          <PrivateRoute path='/servicelist'>
            <ServiceListCard></ServiceListCard>
          </PrivateRoute>

          <PrivateRoute path='/allServiceList'>
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>

          <PrivateRoute path = '/review'>
              <Review></Review>
          </PrivateRoute>

          <PrivateRoute path = '/addService'>
              <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path = '/makeAdmin'>
              <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>
      </signedUserContext.Provider>
    </Router>
  );
}

export default App;
