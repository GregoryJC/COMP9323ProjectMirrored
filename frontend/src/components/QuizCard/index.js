import React, { Component } from 'react'
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
                <div>
                    <Button className="Quiz-Button">Start Now</Button>
                </div>
            </div>
        )
    }
}

export default QuizCard