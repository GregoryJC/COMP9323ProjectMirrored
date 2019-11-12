import React, { Component } from 'react'
import PostBar from "../../../../components/AllPosts/PostBar"
import APIServices from "../../../../api"

const apiServices = new APIServices()
class MyPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            commentList: []
        }
    }

    componentDidMount() {
        this.getMyPost().then(res => {
            let posts = []
            for (let i = 0; i < res.length; i++) {
                const post = res[i]
                const date = new Date(post.createdTime)
                const dateStr = date.toDateString()
                posts.push(<PostBar title={post.title} id={post.id} time={dateStr} author={post.author}/>)
            }
            this.setState({postList: posts})
        }).catch(e => {
            console.log(e)
        })
        this.getMyComment().then(res => {
            console.log(res)
            // let posts = []
            // for (let i = 0; i < res.length; i++) {
            //     const post = res[i]
            //     const date = new Date(post.createdTime)
            //     const dateStr = date.toDateString()
            //     posts.push(<PostBar title={post.title} id={post.id} time={dateStr} author={post.author}/>)
            // }
            // this.setState({commentList: posts})
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
                <div className="font-weight-bold">My Posts</div>
                {this.state.postList}
                <div className="font-weight-bold" style={{marginTop: '40px'}}>My Commented Posts</div>
                {this.state.commentList}
            </div>
        )
    }
}

export default MyPost