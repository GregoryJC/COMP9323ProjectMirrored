import React, { Component } from 'react'
import './style.css'
import { Input, Modal, Tag } from "antd"
import { Link } from "react-router-dom"

const {TextArea} = Input

class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            confirmLoading: false,
            requirementDiv: null,
        }
    }

    componentDidMount() {
        const requirements = this.props.requirements
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
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        })
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            })
        }, 2000)
    }

    handleCancel = () => {
        console.log('Clicked cancel button')
        this.setState({
            visible: false,
        })
    }

    render() {
        const {visible, confirmLoading} = this.state
        return (
            <div className="Project-Card">
                <div style={{width: '100%'}}>
                    <Link to={`/projects/${this.props.id}`} className="Customized-Link">
                        <h3 style={{fontWeight: 'bolder'}}>{this.props.name}</h3>
                    </Link>
                    <p style={{fontWeight: 'lighter', color: 'rgba(82,82,82,1)'}}>Creator: {this.props.creator}</p>
                    <p style={{fontWeight: 'lighter', color: 'rgba(82,82,82,1)'}}>Created time: {this.props.time}</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <p style={{
                            fontWeight: 'bolder',
                            color: 'rgba(82,82,82,1)',
                            marginRight: '10px'
                        }}>Prerequisits: </p>
                        {this.state.requirementDiv}
                    </div>
                </div>
                <Modal
                    title="Message box"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <TextArea
                        placeholder="Hi, I am a front-end developer of 10-year work experience, and I have passed the quiz. Can I join your project?My email: ******@hotmail.com User #02"/>
                </Modal>
            </div>
        )
    }
}

export default ProjectCard