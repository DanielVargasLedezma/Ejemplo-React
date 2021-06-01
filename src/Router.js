import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './Componentes/Error'

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component = ''/>
                    <Route exact path = '/usos' component = ''/>
                    <Route component = {Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;