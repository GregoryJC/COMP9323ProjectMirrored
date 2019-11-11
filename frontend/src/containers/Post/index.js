import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import GrowingPosts from "../../components/GrowingPosts"
import Comments from "../../components/Comments"
import { Button, Divider, Input } from "antd"

import APIServices from "../../api"

const apiServices = new APIServices()
const {TextArea} = Input

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            views: 0,
            terms: null,
            content: '',
        }
        const url = this.props.location.pathname.split("/")
        this.postId = url.pop()
        console.log(this.postId)
    }

    componentDidMount() {
        this.getPost().then(res => {
                this.setState({title: res.title, views: res.views, date: res.createdTime})
                if (res.content.slice(0, 5) === "https") {
                    this.getPostMarkdown(res.content).then(res => {
                        this.setState({terms: res})
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    this.setState({terms: res.content})
                }
            }
        ).catch(err => {
            console.log(err)
        })
    }

    getPost = async () => {
        try {
            return await apiServices.getPost(this.postId)
        } catch (e) {
            console.log(e)
        }
    }

    getPostMarkdown = async (url) => {
        try {
            return await apiServices.getPostFromS3(url)
        } catch (e) {
            console.log(e)
        }
    }

    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    submitComment = () => {
        this.postComment().then(res => {
            console.log(res)
            if (res.status === 200) {
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
        })
    }

    postComment = async () => {
        return await apiServices.postCommentPost(this.postId, this.state.content)
    }

    render() {
        const disabled = this.state.content === ''
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '90%', margin: '140px', display: 'flex', flexDirection: 'row'}}>
                    <div style={{width: '70%', backgroundColor: '#fff', padding: '40px', overflow: 'hidden'}}>
                        <ReactMarkdown source={this.state.terms}/>
                        <Divider/>
                        <p style={{fontWeight: 'bold'}}>Comments</p>
                        <Comments postId={this.postId}/>
                        <Divider/>
                        <p style={{fontWeight: 'bold'}}>Leave your comment</p>
                        <TextArea rows={6} onChange={value => {
                            this.handleChange('content', value)
                        }}/>
                        <Button style={{float: 'right', marginTop: '40px'}} disabled={disabled} onClick={this.submitComment}>Submit</Button>
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