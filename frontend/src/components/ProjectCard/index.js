import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './style.css'
import { Button, Input, Modal } from "antd"

const {TextArea} = Input

class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            confirmLoading: false,
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
                    <h3 style={{fontWeight: 'bolder'}}>{this.props.project.title}</h3>
                    <p style={{fontWeight: 'lighter', color: 'rgba(82,82,82,1)'}}>{this.props.project.author}</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '50%', flexDirection: 'column'}}>
                            <p>{this.props.project.abstract}</p>
                            <Button type="danger" className="Main-Button"
                                    style={{height: '50px', width: '100%', marginLeft: '0px'}}>
                                <Link to='/quizzes/1'
                                      style={{
                                          fontSize: '100%',
                                          fontWeight: 'bolder',
                                          color: 'rgba(235,253,124,1)'
                                      }}>Prerequisit: {this.props.project.prerequisit}</Link>
                            </Button>
                            <Button type="primary" className="Main-Button"
                                    style={{height: '50px', width: '100%', marginLeft: '0px'}} onClick={this.showModal}>
                                <span style={{fontSize: '100%', fontWeight: 'bolder'}}>Leave a message</span>
                            </Button>
                        </div>
                        <div style={{marginLeft: '10%'}}>
                            <img src={this.props.project.image}
                                 style={{width: '100%', height: '100%', objectFit: 'cover'}} alt={"123"}/>
                        </div>
                    </div>
                </div>
                <Modal
                    title="Message box"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <TextArea placeholder="Hi, I am a front-end developer of 10-year work experience, and I have passed the quiz. Can I join your project?My email: ******@hotmail.com User #02"/>
                </Modal>
            </div>
        )
    }
}

export default ProjectCard