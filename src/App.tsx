import React from 'react';
import './App.css';
import {Router,Link,Switch,Redirect,Route} from 'react-router-dom'
import history from "./history";
import Profile from './Profile';
import Obama from "./Img/Obama.jpg";
import Hagrid from "./Img/Hagrid.jpg";
import Chipolino from "./Img/Chipolino.jpg";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">
            <Link to="/profile1">Chipolino</Link>
            <Link to="/profile2">Hagrid</Link>
            <Link to="/profile3">Obama</Link>
        </header>
        <Switch>
					<Redirect exact from='/' to='/profile1' />
					<Route exact path="/profile1" component={() => <Profile name="Chipolino" photo={Chipolino} />} />
					<Route exact path="/profile2" component={() => <Profile name="Hagrid" photo={Hagrid} />} />
					<Route exact path="/profile3" component={() => <Profile name="Obama" photo={Obama} />} />
				</Switch>
      </Router>
    </div>
 );
}

export default App;
