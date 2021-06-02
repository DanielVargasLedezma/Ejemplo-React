import React, {Component, Fragment} from 'react';

import Descripcion from './Descripcion'

class Usos extends Component{
    
    render(){
        return(
            <Fragment>
                <Descripcion
                    text_1 = 'Soy el componente descripcion de Usos'
                    text_2 = 'Aqui se pueden encontrar usos de React'
                />
                <div className = "d-flex flex-row justify-content-between align-items-center Usos">
                    <div className ="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className ="col-md-8 col-sm-8 col-xs-8">
                        <br/>
                        <br/>
                        <h1>Bienvenido a Usos</h1>
                        <h2>Soy el componente Usos</h2>
                        <br/>
                        <br/>
                    </div>
                    <div className ="col-md-2 col-sm-2 col-xs-2"></div>
                </div>
            </Fragment>
        );
    }
}

export default Usos;