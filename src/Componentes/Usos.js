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
                    <div className ="col-md-2 col-sm-1 col-xs-1"></div>
                    <div className ="col-md-4 col-sm-5 col-xs-5">
                        <br/>
                        <br/>
                        <h1>Bienvenido a Usos</h1>
                        <h2>Soy el componente Usos</h2>
                        <br/>
                        <br/>
                    </div>
                    <div className ="col-md-4 col-sm-5 col-xs-5">
                        <br/>
                        <br/>
                        <h1>Bienvenido a Usos</h1>
                        <h2>Soy el componente Usos</h2>
                        <br/>
                        <br/>
                    </div>
                    <div className ="col-md-2 col-sm-1 col-xs-1"></div>
                </div>
            </Fragment>
        );
    }
}

export default Usos;