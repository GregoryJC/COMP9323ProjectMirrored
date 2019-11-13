import React, { Component } from 'react'
import PostBar from "../../../../components/AllPosts/PostBar"
import APIServices from "../../../../api"

const apiServices = new APIServices()

class MyPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postNum: 0,
            postList: [],
            commentNum: 0,
            commentList: []
        }
    }

    componentDidMount() {
        this.getMyPost().then(res => {
            this.setState({postNum: res.length})
            let posts = []
            for (let i = 0; i < res.length; i++) {
                const post = res[i]
                const date = new Date(post.createdTime)
                const dateStr = date.toDateString()
                posts.push(<PostBar key={post.id} title={post.title} id={post.id} time={dateStr} author={post.author}/>)
            }
            this.setState({postList: posts})
        }).catch(e => {
            console.log(e)
        })
        this.getMyComment().then(res => {
            console.log(res)
            this.setState({commentNum: res.length})
            let comments = []
            for (let i = 0; i < res.length; i++) {
                const post = res[i]
                const date = new Date(post.createdTime)
                const dateStr = date.toDateString()
                comments.push(<PostBar key={post.id} title={post.title} id={post.id} time={dateStr} author={post.author} isComment={true} comment={post.content}/>)
            }
            this.setState({commentList: comments})
        }).catch(e => {
            console.log(e)
        })
    }

    getMyPost = async () => {
        return await apiServices.getUserPosts()
    }

    getMyComment = async () => {
        return await apiServices.getUserComments()
    }

    render() {
        return (
            <div>
                <div className='p-4'>
                    <div className="font-weight-bold">My Posts: {this.state.postNum} posted by me</div>
                    <hr/>
                    {this.state.postList}
                    <div className="font-weight-bold" style={{marginTop: '40px'}}>My Commented Posts: {this.state.commentNum} commented by me</div>
                    {this.state.commentList}
                </div>
            </div>
        )
    }
}

export default MyPost