import React, { Component } from 'react'
import ProjectCard from "../ProjectCard"

const project = {

    title: 'We are looking for 2 front-end developers.',
    author: 'Joseph',
    abstract: 'We are going to build an open-source community. Now looking for 2 front-end developers.',
    prerequisit: 'Front-end quiz #1',
    image: 'https://lingxu.s3-ap-southeast-2.amazonaws.com/u41.jpg'
}

class ProjectPageLeft extends Component {
    render() {
        return (
            <div>
                <h3>Projects</h3>
                <div style={{marginTop: '30px'}}>
                    <ProjectCard project={project}/>
                </div>
            </div>
        )
    }
}

export default ProjectPageLeft