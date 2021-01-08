import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import React, {useEffect} from 'react';
import { auth } from "./firebase/firebase";
import Login from './firebase/Login';
import CheckOut from './components/CheckOut';
import {useStateValue} from './components/StateProvider';

function App() {
  
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <CheckOut/>
          </Route>    
        </Switch>
      </Router>

    </div>
  );
}

export default App;
