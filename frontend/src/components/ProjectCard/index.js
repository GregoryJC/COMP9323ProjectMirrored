import React, { Component } from 'react'
import './style.css'
// import { Button } from "antd"

class ProjectCard extends Component {
    render() {
        return (
            <div className="Project-Card">
                <div style={{width: '80%'}}>
                    <p>{this.props.project.title}</p>
                    <p>{this.props.project.author}</p>
                </div>
            </div>
        )
    }
}

export default ProjectCard