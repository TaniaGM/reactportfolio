import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumbotron.css';
class JumbotronContainer extends Component {

    state = {
        info: this.props.personalInfo || []
    };
    render() {
        return (
            <Jumbotron>
                <h1 className="text-center ">{this.props.personalInfo.name}</h1>
                <p className="text-center" id="location">{this.props.personalInfo.location}</p>
                <p className="text-center">
                    {/*Place this tag where you want the button to render.*/}
                    <a href={this.props.personalInfo.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x"></i></a>
                    <a href={this.props.personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin fa-3x"></i>
                    </a>
                </p>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer;