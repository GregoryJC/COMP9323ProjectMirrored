import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Modal } from "antd"
import Question from "../../components/Question"
import APIServices from "../../api"

const apiServices = new APIServices()

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            skill: '',
            result: '',
            score: 0,
            questions: [],
            visible: false,
            confirmLoading: false,
            ModalText: "",
        }
        this.onChildChange = this.onChildChange.bind(this)
        this.answers = {}
        const url = this.props.location.pathname.split("/")
        this.quizId = url.pop()
    }

    componentDidMount() {
        this.getQuestions().then(res => {
            this.setState({name: res.quiz.name, skill: res.quiz.relatedSkill})
            let questions = []
            for (let i = 0; i < res.questions.length; i++) {
                const question = res.questions[i]
                this.answers[question.id] = {"id": question.id, "ans": -1}
                questions.push(<Question key={question.id}
                                         mark={i+1}
                                         content={question.content}
                                         options={question.options}
                                         id={question.id}
                                         onInputChange={this.onChildChange}/>)
            }
            this.setState({questions: questions})
        }).catch(e => {
            console.log(e)
        })
    }

    getQuestions = async () => {
        return apiServices.getOneQuiz(this.quizId)
    }

    onChildChange(k, v) {
        this.answers[k]["ans"] = v
    }

    submitAnswer = () => {
        let answers = []
        for (let i in this.answers) {
            answers.push(this.answers[i])
        }
        this.postAnswer(answers, this.quizId).then(res => {
            this.setState({score: res.data.mark, result: res.data.result})
            this.showModal()
        }).catch(e => {
            console.log(e)
        })
    }

    showModal = () => {
        if (this.state.result === 'pass') {
            this.setState({ModalText: `Congratulations! You have passed the quiz! Your score is ${this.state.score}`})
        } else {
            this.setState({ModalText: `Oops, you failed quiz! Your score is ${this.state.score}`})
        }
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.props.history.push(`/quizzes`)
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    postAnswer = async (ans, pk) => {
        return await apiServices.postAnswer(ans, pk)
    }

    render() {
        const {visible, confirmLoading, ModalText} = this.state
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}
                <Modal
                    title="Reserve"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
                <div style={{width: '90%', marginTop: '140px'}}>
                    <div style={{margin: '0px 0px 20px 20px'}}>
                        <div>
                            <span style={{fontWeight: 'bold'}}>Quiz: </span>
                            <span style={{fontStyle: 'italic'}}>{this.state.name}</span>
                        </div>
                        <div>
                            <span style={{fontWeight: 'bold'}}>Related skill: </span>
                            <span style={{fontStyle: 'italic'}}>{this.state.skill}</span>
                        </div>
                    </div>
                    {this.state.questions}
                </div>
                <Button type="primary" onClick={this.submitAnswer} style={{margin: '40px'}}>
                    Submit
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Quiz)