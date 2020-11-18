import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import notFound from './components/notFound'
import Login from './components/authForms/Login'
import Register from './components/authForms/Register'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={notFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;