import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Profile from  './pages/Profile';
import Register from './pages/Register';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    
    return (
    <BrowserRouter >
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/Register" component={Register} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Incidents/New" component={NewIncident} />
        </Switch>

    </BrowserRouter>

);
}