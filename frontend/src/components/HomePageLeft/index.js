import React, { Component } from 'react'
import PostCard from "../PostCard"
import posts from "../../containers/Home/dummyPost"

class HomePageLeft extends Component {
    render() {
        return (
            <div>
                <PostCard post={posts["1"]}/>
                <PostCard post={posts["2"]}/>
            </div>
        )
    }
}

export default HomePageLeft