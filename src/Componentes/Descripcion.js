import React, {Component, Fragment} from 'react';

class Descripcion extends Component{

    render(){
        return(
            <Fragment>
                <div className = "d-flex flex-row justify-content-between align-items-center Descripcion">
                    <div className ="col-md-2 col-sm-2 col-xs-2"></div>
                    <div className ="col-md-8 col-sm-8 col-xs-8">
                        <br/>
                        <br/>
                        <br/>
                        <h1>{this.props.text_1}</h1>
                        <h2>{this.props.text_2}</h2>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className ="col-md-2 col-sm-2 col-xs-2"></div>
                </div>
            </Fragment>
        );
    }
}

export default Descripcion;