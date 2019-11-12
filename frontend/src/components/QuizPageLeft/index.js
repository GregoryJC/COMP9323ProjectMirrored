import React, { Component } from 'react'
import QuizCard from "../QuizCard"
import APIServices from "../../api"

const apiServices = new APIServices()

class QuizPageLeft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizList: []
        }
        this.quizList = []
    }
    componentDidMount() {
        this.getQuizzes().then(res => {
            for (let i = 0; i < res.length; i++) {
                console.log(res[i])
                this.quizList.push(<QuizCard key={i} quiz={res[i]}/>)
            }
            this.setState({quizList: this.quizList})
        }).catch(e => {
            console.log(e)
        })
    }

    getQuizzes = async () => {
        return await apiServices.getQuizzes()
    }
    render() {
        return (
            <div>
                <h3>Quizzes</h3>
                <div style={{marginTop: '30px'}}>
                    {this.state.quizList}
                </div>
            </div>
        )
    }
}

export default QuizPageLeft