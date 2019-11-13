import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { Tag, Button } from "antd"
import APIServices from "../../api"

const apiServices = new APIServices()

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            likes: '',
            time: '',
            creator: '',
            summary: '',
            skills: '',
            requirementDiv: null,
        }
        const url = this.props.location.pathname.split("/")
        this.projectId = url.pop()
    }

    componentDidMount() {
        this.getProject().then(res => {
            this.setState({likes: res.isLike})
            const project = res.project
            const date = new Date(project.createdTime)
            const dateStr = date.toDateString()
            const requirements = project.requirement
            this.setState({name: project.name, creator: project.creator, time: dateStr, summary: project.summary})
            let requirementsList = []
            if (requirements !== null) {
                const requirementsArr = requirements.split(',')
                for (let i = 0; i < requirementsArr.length; i++) {
                    requirementsList.push(<Tag color="magenta">{requirementsArr[i]}</Tag>)
                }
                const requirementDiv = <div>{requirementsList}</div>
                this.setState({requirementDiv: requirementDiv})
            } else {
                this.setState({requirementDiv: <div>Null</div>})
            }

        }).catch(e => {
            console.log(e)
        })
    }

    getProject = async () => {
        return apiServices.getOneProject(this.projectId)
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '800px'}}>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}
                <div style={{width: '90%', marginTop: '140px'}}>
                    <div className="Project-Card">
                        <h3 style={{fontWeight: 'bolder'}}>{this.state.name}</h3>
                        <p style={{color: 'rgba(82,82,82,1)'}}>Likes: {this.state.likes}</p>
                        <div>
                        <span style={{fontWeight: 'lighter', color: 'rgba(82,82,82,1)'}}>Creator: {this.state.creator}</span>
                        <span style={{fontWeight: 'lighter', color: 'rgba(82,82,82,1)', marginLeft: '40px'}}>Created
                            time: {this.state.time}</span>
                        </div>
                        <p style={{color: 'rgba(82,82,82,1)', margin: '30px 0 30px 0'}}>Summary: {this.state.summary}</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p style={{
                                fontWeight: 'bolder',
                                color: 'rgba(82,82,82,1)',
                                marginRight: '10px'
                            }}>Prerequisits: </p>
                            {this.state.requirementDiv}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '50px'}}>
                            <Button type={"danger"} style={{width: '100px'}}>Save</Button>
                            <Button type={"primary"} style={{width: '100px', marginLeft: '30px'}}>Join</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Project)