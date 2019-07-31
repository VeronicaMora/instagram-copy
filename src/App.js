import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppBar from './components/AppBar/appBar'
import Home from './views/Home/home'
import Profile from './views/Profile/profile'
import Login from './views/Login/login'
import SignUp from './views/SignUp/signup'

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
