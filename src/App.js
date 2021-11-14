import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddNewService from './components/AddNewService/AddNewService';
import MyOrder from './components/MyOrder/MyOrder';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import Update from './components/Update/Update';
import Register from './components/LogIn/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/addnewservice'>
            <AddNewService></AddNewService>
          </Route>
          <PrivateRoute path = '/myOrder/:orderId'>
          <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path = '/manage'>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path ='/services/update/:id'>
            <Update></Update>
          </Route>
          <Route path = '/login'>
            <LogIn></LogIn>
          </Route>
          <Route path = '/register'>
            <Register></Register>
          </Route>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
