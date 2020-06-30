import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dex from '../pages/Dex';
import Visualizar from '../pages/Visualizar';
import NotFound from '../pages/NotFound';

export default function appRoutes(){
    return(
        <Switch>
            <Route path="/" exact component={Dex}/>
            <Route path="/view" exact component={Visualizar}/>
            <Route component={NotFound} />
        </Switch>
    );
}