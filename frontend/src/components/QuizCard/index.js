import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './style.css'
import { Button } from "antd"

class QuizCard extends Component {
    render() {
        return (
            <div className="Quiz-Card">
                <div style={{width: '80%'}}>
                    <h3>{this.props.quiz.title}</h3>
                    <p>Estimated time to finish: 20 minutes</p>
                </div>
                <Link to={'quizzes/1'}>
                    <Button className="Quiz-Button">Start Now</Button>
                </Link>
            </div>
        )
    }
}

export default QuizCard