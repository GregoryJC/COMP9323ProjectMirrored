import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import GrowingPosts from "../../components/GrowingPosts"
import ProjectRecommended from "../../components/ProjectRecommended"

import HomePageLeft from "../../components/HomePageLeft"
import QuizPageLeft from '../../components/QuizPageLeft'
import ProjectPageLeft from "../../components/ProjectPageLeft"
import Post from "../Post"

import './style.css'
import { Button } from "antd"

const createPost = () => (
    <div style={{alignItems: 'center', marginLeft: '20%'}}>
        <Button type="danger" style={{
            height: '60px',
            borderRadius: '20px',
            margin: '30px',
            width: '60%',
            backgroundColor: 'rgba(104,188,99,1)',
            border: '5px solid #fff'
        }}>
            <span style={{fontSize: '20px', fontWeight: 'bold'}}>Create Posts</span>
        </Button>
    </div>
)

class Home extends Component {
    render() {
        return (
            <div className="Home-Container">
                <div style={{width: '80%', display: 'flex', flexDirection: 'row', margin: '140px'}}>
                    <div style={{width: '63%', display: 'flex', flexDirection: 'column', paddingRight: '30px'}}>
                        <Switch>
                            <Route path='/quizzes' exact component={QuizPageLeft}/>
                            <Route path='/' exact component={HomePageLeft}/>
                            <Route path='/projects' exact component={ProjectPageLeft}/>
                            <Route path='/posts/:pk' exact component={Post}/>
                        </Switch>
                    </div>
                    <div style={{
                        width: '35%',
                        marginLeft: '2%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {this.props.user.isAuth ? createPost() : null}
                        <GrowingPosts/>
                        <ProjectRecommended/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Home)