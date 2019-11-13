import React, { Component } from 'react'
import APIServices from "../../api"
import ProjectCard from "../ProjectCard"


const apiServices = new APIServices()
class AllProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        this.getProjects().then(res => {
            this.setState({projectList: res})
        })
    }

    getProjects = async () => {
        try {
            const res = await apiServices.getProjects()
            let projects = []
            for (let i = 0; i < res.length; i++) {
                const project = res[i]
                console.log(project)
                const date = new Date(res[i].createdTime)
                const dateStr = date.toDateString()
                projects.push(<ProjectCard key={project.id} id={project.id} name={project.name} creator={project.creator} time={dateStr} requirements={project.requirement}/>)
            }
            return projects
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                {this.state.projectList}
            </div>
        )
    }
}

export default AllProjects