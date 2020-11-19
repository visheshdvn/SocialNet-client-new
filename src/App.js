import React, { useEffect, Fragment } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import notFound from './components/notFound'
import Login from './components/authForms/Login'
import Register from './components/authForms/Register'
import Navbar from './components/layout/navbar'

// redux
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import Home from './components/home/home'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route component={notFound} />
          </Switch>
        </Fragment>
      </Router>
    </div>
    </Provider>
  );
}

export default App;