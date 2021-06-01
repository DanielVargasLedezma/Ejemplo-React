import React, {Component} from 'react';
import logo from './../Vista/img/logo.svg';
/* */
class NavVar extends Component{
    render(){
        return(
            <header id = "header">
                <section className = "d-flex flex-row justify-content-between align-items-center">
                    <div className = "col-md-4 col-sm-4 col-xs-4" id = "logo">
                        <img src = {logo} alt = "Logo-React" className = "Logo"/>
                        <span className = "titulo">
                            <h2>
                                <strong> {this.props.titulo} </strong>
                            </h2>
                        </span>
                    </div>
                    <div className = "col-md-2 col-sm-2 col-xs-2"></div>
                    <div className = "col-md-6 col-sm-6 col-xs-6">
                        <ul className = "d-flex flex-row  align-items-center">
                            <li className = "col-md-3 col-sm-3 col-xs-3">
                                <a href = {this.props.url_1} target = {this.props.target_1}>{this.props.enlance_1}</a>
                            </li>
                            <li className = "col-md-3 col-sm-3 col-xs-3">
                                <a href = {this.props.url_2} target = {this.props.target_2}>{this.props.enlance_2}</a>
                            </li>
                            <li className = "col-md-3 col-sm-3 col-xs-3">
                                <a href = {this.props.url_3} target = {this.props.target_3}>{this.props.enlance_3}</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
            
        );
    }
}

export default NavVar;