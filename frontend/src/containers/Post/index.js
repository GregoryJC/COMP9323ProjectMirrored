import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import file from '../../assets/20131228 Introduction to Clojure - Modern dialect of Lisp (Part 1).md'
import GrowingPosts from "../../components/GrowingPosts"
import Comments from "../../components/Comments"
import { Divider } from "antd"


class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            terms: null
        }
    }

    componentDidMount() {
        fetch(file).then((response) => response.text()).then((text) => {
            this.setState({terms: text})
        })
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '80%', margin: '140px', display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: '63%', backgroundColor: '#fff', padding: '40px'}}>
                        <ReactMarkdown source={this.state.terms}/>
                        <Divider/>
                        <p style={{fontWeight: 'bold'}}>Comments</p>
                        <Comments roomId={1}/>
                    </div>
                    <div style={{width: '30%', marginLeft: '2%'}}>
                        <GrowingPosts/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post