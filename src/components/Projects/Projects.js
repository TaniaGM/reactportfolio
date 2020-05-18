import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from "../Cards";
import "./Projects.css";

class ProjectContainer extends Component {
    state = {
        projects: this.props.projects || []
    };
    render() {
        return (
            <div className="card border-primary mb-3" id="projects-link">
                <div className="card-header">
                    <h3>Projects
                        <i className="fa fa-code" aria-hidden="true"></i>
                    </h3>
                </div>
                <div className="card-body">
                    <div className="card-block">
                        <div className="container">
                            <Grid>
                                <Row>
                                    {this
                                        .state
                                        .projects
                                        .map(projectLine => (
                                            <Col
                                                s={12}
                                                md={6}
                                                lg={4}
                                                key={projectLine
                                                    .heading
                                                    .toString()}>
                                                <Card projectLine={projectLine} />
                                            </Col>
                                        ))}
                                </Row>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectContainer;