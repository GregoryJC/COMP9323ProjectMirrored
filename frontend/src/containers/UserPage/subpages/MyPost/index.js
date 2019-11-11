import React, { Component } from 'react'
import APIServices from "../../../../api"

const apiServices = new APIServices()
class MyPost extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.getMyPost().then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
        this.getMyComment().then(res => {
            console.log(res)
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

            </div>
        )
    }
}

export default MyPost