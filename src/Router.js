import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Error from './Componentes/Error';
import NavVar from './Componentes/NavVar';
import Inicio from './Componentes/Inicio';
import Footer from './Componentes/Footer';
import Usos from './Componentes/Usos';

class Router extends Component{

    render(){
        var enlace_1 = this.props.link_1;
        var enlace_2 = this.props.link_2;
        var enlace_3 = this.props.link_3;
        
        return(
            <BrowserRouter>
                <NavVar 
                    titulo = 'Ejemplo React'
                    enlance_1 = 'Home'
                    url_1 = {enlace_1}
                    target_1 = ''
                    enlance_2 = 'Usos'
                    url_2 = {enlace_2}
                    target_2 = ''
                    enlance_3 = 'Más'
                    url_3 = {enlace_3}
                    target_3 = '_blank'
                />
                <main>
                    <Switch>
                        <Route exact path = {enlace_1} component = {Inicio}/>
                        <Route exact path = {enlace_2} component = {Usos}/>
                        <Route component = {Error}/>
                    </Switch>
                </main>
                <Footer
                    text = 'Todos los derechos reservados.'
                />
            </BrowserRouter>
        );
    }
}

export default Router;