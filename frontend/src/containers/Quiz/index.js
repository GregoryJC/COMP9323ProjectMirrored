import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from "antd"
import Question from "../../components/Question"

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
        this.onChildChange = this.onChildChange.bind(this)
        this.questions = {
            1: {
                number: 1,
                content: 'A collection of data containing both properties and methods is called...'
            },
            2: {
                number: 2,
                content: 'In JavaScript, \'this\' refers to the object that ____ the object.'
            }
        }
        this.q = []
        this.q.push(<Question key={this.questions["1"].number} question={this.questions["1"]}
                              onInputChange={this.onChildChange}/>)
        this.q.push(<Question key={this.questions["2"].number} question={this.questions["2"]}
                              onInputChange={this.onChildChange}/>)
        this.answers = new Array(2).fill(0)
    }

    componentDidMount() {

    }

    onChildChange(k, v) {
        this.answers[k - 1] = v
    }

    submitAnswer = () => {
        const userAnswer = this.answers
        const realAnswers = [1,1]
        console.log(userAnswer)
        let correct = 0
        for (let i = 0; i < userAnswer.length; i++) {
            userAnswer[i] === realAnswers[i] ? correct += 1 : correct += 0;
        }
        this.setState({score: (correct / userAnswer.length) * 100})
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}
                <div style={{width: '90%', marginTop: '140px'}}>
                    {this.q}
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