import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import './SkillsTagCloud.css';


const customRenderer = (tag, size, color) => (
    <span
        key={tag.value}
        style={{
            animation: 'blinker 3s linear infinite',
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${size}em`,
            border: `2px solid ${color}`,
            margin: '3px',
            padding: '3px',
            display: 'inline-block',
            color: 'black'
        }}>{tag.value}</span>
);

class SkillsTagCloudContainer extends Component {
    state = {
        skills: this.props.skills || []
    }
    render() {
        return (
            <div id="skills-link">
                <div className="card border-primary mb-3" id="skills-container-border">
                    <div className="card-header">
                        <h3>Skills
                                <i className="fa fa-cogs" aria-hidden="true"></i>
                        </h3>
                    </div>
                    <div className="card-body" id="tag-container">
                        <TagCloud tags={this.state.skills} minSize={1} maxSize={2} renderer={customRenderer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsTagCloudContainer;