import React, { Component } from 'react'
import APIServices from "../../api"
import { Comment, List } from "antd"


const apiServices = new APIServices()

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {reviews: []}
        this.postId = this.props.postId
        this.reviews = []
    }

    componentDidMount() {
        this.loadReviews().then(res => {
            this.setState({reviews: res})
        })
    }

    loadReviews = async () => {
        try {
            console.log(this.postId)
            const res = await apiServices.getPostComment(this.postId)
            console.log('-----')
            console.log(res)
            let reviews = []
            for (let i = 0; i < res.length; i++) {
                const date = new Date(res[i].createdTime)
                const dateTime = date.toDateString()
                reviews.push({
                    content: res[i].content,
                    avatar: res[i].avatar,
                    author: res[i].creator,
                    datetime: dateTime
                })
            }
            return reviews
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <List itemLayout="horizontal"
                      pagination={{
                          onChange: page => {
                              console.log(page)
                          },
                          pageSize: 10
                      }}
                      dataSource={this.state.reviews}
                      renderItem={item => (
                          <List.Item>
                              <Comment content={item.content} avatar={item.avatar} datetime={item.datetime}
                                       author={item.author}/>
                          </List.Item>
                      )}/>
            </div>
        )
    }
}

export default Comments