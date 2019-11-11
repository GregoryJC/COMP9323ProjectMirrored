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
                <div style={{width: '80%', marginTop: '140px', minHeight: '800px'}}>
                    <List itemLayout="horizontal"
                          pagination={{
                              // onChange: page => {
                              //     console.log(page)
                              // },
                              pageSize: 10
                          }}
                          dataSource={this.state.postList}
                          renderItem={item => (
                                  <PostBar title={item.title} author={item.author} time={item.time} id={item.id}/>
                          )}/>
                </div>
            </div>
        )
    }
}

export default AllPosts