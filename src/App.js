import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Update from './components/Update/Update';
import Register from './components/LogIn/Register/Register';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Myorder from './components/Dashboard/Myorder/Myorder';

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
          <PrivateRoute path = '/myorder/:orderId'>
          <Myorder></Myorder>
          </PrivateRoute>
          <PrivateRoute path = '/dashboard'>
          <Dashboard></Dashboard>
          </PrivateRoute>
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
