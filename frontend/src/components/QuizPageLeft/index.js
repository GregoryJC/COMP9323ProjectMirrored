import React, { Component } from 'react'
import QuizCard from "../QuizCard"

const quizzes = {
    1: {
        title: 'Front-end Quiz #1'
    },
    2: {
        title: 'Back-end Quiz #1'
    }
}

class QuizPageLeft extends Component {
    render() {
        return (
            <div>
                <h3>Quizzes</h3>
                <div style={{marginTop: '30px'}}>
                    <QuizCard quiz={quizzes["1"]}/>
                    <QuizCard quiz={quizzes["2"]}/>
                </div>
            </div>
        )
    }
}

export default QuizPageLeft