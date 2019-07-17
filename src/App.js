import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppBar from './components/AppBar/appBar'
import Home from './views/Home/home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar/>
        <Switch>
          <Route exact pad='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
