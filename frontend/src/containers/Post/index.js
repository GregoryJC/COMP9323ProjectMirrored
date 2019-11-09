import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import file from '../../assets/z5147810.md'


class Post extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '90%', marginTop: '140px'}}>
                    <ReactMarkdown source={file}/>
                </div>
            </div>
        )
    }
}

export default Post