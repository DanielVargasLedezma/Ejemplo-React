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
                        <section className = "d-flex flex-row justify-content-between align-items-center">
                            <div className = "col-md-6 col-sm-6 col-xs-6">

                            </div>
                            <div className = "col-md-6 col-sm-6 col-xs-6">
                                
                            </div>
                        </section>
                        <img src = {logo} alt = "Logo-React" className = "Logo"/>
                        <span className = "titulo">
                            <h2>
                                <strong> {this.props.titulo} </strong>
                            </h2>
                        </span>
                    </div>
                    <div className = "col-md-2 col-sm-2 col-xs-2"></div>
                    <div className = "col-md-6 col-sm-6 col-xs-6">
                        <ul className = "d-flex flex-row  align-items-center navbar">
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <NavLink to = {this.props.url_1} target = {this.props.target_1}> {this.props.enlance_1} </NavLink>
                            </li>
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <NavLink to = {this.props.url_2} target = {this.props.target_2}> {this.props.enlance_2} </NavLink>
                            </li>
                            <li className = "col-md-4 col-sm-4 col-xs-4">
                                <NavLink to = {this.props.url_3} target = {this.props.target_3}> {this.props.enlance_3} </NavLink>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
            
        );
    }
}

export default NavVar;