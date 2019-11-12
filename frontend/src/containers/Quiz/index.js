import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from "antd"
import Question from "../../components/Question"
import APIServices from "../../api"

const apiServices = new APIServices()

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            skill: '',
            score: 0,
            questions: []
        }
        this.onChildChange = this.onChildChange.bind(this)
        // this.questions = {
        //     1: {
        //         number: 1,
        //         content: 'A collection of data containing both properties and methods is called...'
        //     },
        //     2: {
        //         number: 2,
        //         content: 'In JavaScript, \'this\' refers to the object that ____ the object.'
        //     }
        // }
        // this.q = []
        // this.q.push(<Question key={this.questions["1"].number} question={this.questions["1"]}
        //                       onInputChange={this.onChildChange}/>)
        // this.q.push(<Question key={this.questions["2"].number} question={this.questions["2"]}
        //                       onInputChange={this.onChildChange}/>)
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
        console.log(this.answers)
        for (let i in this.answers) {
            answers.push(this.answers[i])
        }
        this.postAnswer(answers, this.quizId).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    postAnswer = async (ans, pk) => {
        return await apiServices.postAnswer(ans, pk)
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}
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
                <p>User's score is {this.state.score}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Quiz)