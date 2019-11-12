import React, { Component } from 'react'
import { List } from "antd"
import PostBar from "./PostBar"
import APIServices from "../../api"

const apiServices = new APIServices()

class AllPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        this.getAllPosts().then(res => {
            this.setState({postList: res})
        }).catch(e => {
            console.log(e)
        })
    }

    getAllPosts = async () => {
        try {
            const res = await apiServices.getAllPosts()
            let posts = []
            for (let i = 0; i < res.length; i++) {
                const post = res[i]
                const date = new Date(res[i].createdTime)
                const dateStr = date.toDateString()
                posts.push({
                    title: post.title,
                    author: post.author,
                    time: dateStr,
                    id: post.id
                })
            }
            return posts
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '100%', minHeight: '800px'}}>
                    <h3>Posts</h3>
                    <List itemLayout="horizontal"
                          pagination={{
                              // onChange: page => {
                              //     console.log(page)
                              // },
                              pageSize: 20
                          }}
                          dataSource={this.state.postList}
                          style={{marginTop: '30px'}}
                          renderItem={item => (
                                  <PostBar title={item.title} author={item.author} time={item.time} id={item.id}/>
                          )}/>
                </div>
            </div>
        )
    }
}

export default AllPosts