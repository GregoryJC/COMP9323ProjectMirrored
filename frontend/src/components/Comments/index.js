import React, { Component } from 'react'
import APIServices from "../../api"
import { Comment, List } from "antd"


const apiServices = new APIServices()

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {reviews: []}
        this.roomId = this.props.roomId
        this.reviews = []
    }

    componentDidMount() {
        this.loadReviews().then(res => {
                this.setState({reviews: res})
        })
    }

    loadReviews = async () => {
        try {
            const res = await apiServices.getRoomReviews(this.roomId)
            let reviews = []
            for (let i = 0; i < res.length; i++) {
                reviews.push({
                    content: res[i].content,
                    avatar: res[i].avatar,
                    author: res[i].username,
                    datetime: res[i].time
                })
            }
            return reviews
        } catch (err) {
            console.log(err)
        }
    }

    fuck = () => {
        console.log('fuck')
        console.log(this.reviews)
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