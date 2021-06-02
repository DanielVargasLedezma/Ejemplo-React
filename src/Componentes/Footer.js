import React, {Component} from 'react';

class Footer extends Component {
    
    render(){
        return(
            <footer className = "d-flex flex-row justify-content-between align-items-center">
                <div className = "col-md-3 col-sm-3 col-xs-3"></div>
                <div className = "col-md-6 col-sm-6 col-xs-6">
                    <br/>
                    <br/>
                    <p>{this.props.text}</p>
                    <br/>
                    <br/>
                </div>
                <div className = "col-md-3 col-sm-3 col-xs-3"></div>
            </footer>
        );
    }
}

export default Footer;