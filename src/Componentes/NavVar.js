import React, {Component} from 'react';
import logo from './../Vista/img/logo.svg';
import {NavLink} from 'react-router-dom'

/* */
class NavVar extends Component{
    render(){
        return(
            <header id = "header">
                <section className = "d-flex flex-row justify-content-between align-items-center header">
                    <div className = "col-md-4 col-sm-4 col-xs-4" id = "logo">
                        <section className = "d-flex flex-column  justify-content-between align-items-center">
                            <div>
                                <img src = {logo} alt = "Logo-React" className = "Logo"/>   
                            </div>
                            <div>
                                <span className = "titulo">
                                    <h2>
                                        <strong> {this.props.titulo} </strong>
                                    </h2>
                                </span>
                            </div>
                        </section>
                    </div>
                    <div className = "col-md-2 col-sm-1 col-xs-1"></div>
                    <div className = "col-md-6 col-sm-7 col-xs-7">
                        <ul className = "d-flex flex-row  align-items-center navbar">
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <NavLink to = {this.props.url_1} target = {this.props.target_1}> {this.props.enlance_1} </NavLink>
                            </li>
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <NavLink to = {this.props.url_2} target = {this.props.target_2}> {this.props.enlance_2} </NavLink>
                            </li>
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <a href = {this.props.url_3} target = {this.props.target_3}> {this.props.enlance_3} </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
            
        );
    }
}

export default NavVar;