import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Modal } from 'antd'
import {
    faAndroid,
    faAngular,
    faCss3,
    faGit,
    faHtml5,
    faJava,
    faJs,
    faPhp,
    faPython,
    faSwift,
    faVuejs,
    faWordpress
} from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { ABILITY_SET } from "../../../../assets/constants"

library.add(faGit, faJava, faPython, faJs, faPhp, faCss3, faHtml5, faWordpress, faAndroid, faSwift, faAngular, faVuejs, faCheck, faTimes)

class AbilityCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.abilityId,
            canDo: false,
            visible: false,
            confirmLoading: false,
            ModalText: "",
        }
    }

    componentDidMount() {
        if (this.props.canDo === 1) {
            this.setState({canDo: true})
        }
    }

    showModal = () => {
        if (!this.state.canDo) {
            this.setState({
                ModalText: "You have not pass relative quiz, do you want to take the quiz now?"
            })
        } else {
            this.setState({
                ModalText:
                    "Congratulations! You have passed the quiz, do you want to redo the quiz?"
            })
        }
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.props.history.push(`/quizzes/${this.state.id + 2}`)
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }


    render() {
        const {visible, confirmLoading, ModalText} = this.state
        return (
            <div style={{
                display: 'flex',
                width: '25%',
                height: '200px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Modal
                    title="Reserve"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
                <div onClick={this.showModal} className="Ability-Card">
                    <div style={{width: '65%', height: '100%'}}>
                        <FontAwesomeIcon icon={["fab", ABILITY_SET[this.state.id]]} size={'5x'}
                                         style={{margin: '10px 0px 0px 20px'}}/>
                    </div>
                    <div style={{width: '35%', height: '100%'}}>
                        <FontAwesomeIcon icon={["fas", this.state.canDo ? "check" : "times"]} size={'3x'}
                                         style={{margin: '20px 0px 0px 7px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbilityCard