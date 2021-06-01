import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Error from './Componentes/Error'
import NavVar from './Componentes/NavVar'

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <NavVar 
                    titulo = 'Ejemplo React'
                    enlance_1 = 'Home'
                    url_1 = '/'
                    target_1 = ''
                    enlance_2 = 'Usos'
                    url_2 = '/usos'
                    target_2 = ''
                    enlance_3 = 'Más sobre React'
                    url_3 = 'https://reactjs.org'
                    target_3 = '_blank'
                />
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