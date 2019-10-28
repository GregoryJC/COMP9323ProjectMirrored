import React, { Component } from 'react'

import { Button, Icon } from 'antd'

class PostCard extends Component {
    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', marginBottom: '50px', padding: '40px'}}>
                <h1>{this.props.post.title}</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'lighter'}}>
                    <span>{this.props.post.author}</span>
                    <span>{this.props.post.time}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                    <div style={{height: '300px', width: '300px'}}>
                        <p>{this.props.post.abstract}</p>
                    </div>
                    <div style={{height: '300px', width: '300px'}}>
                        <img src={require("../../assets/images/homepage_background4.jpg")}
                             alt="123"
                             style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '60px'}}>
                    <div style={{width: '15%'}}>
                        <Button type="link" style={{top: '-5px'}}>
                            <Icon type="like" style={{color: '#000'}}/>
                        </Button>
                        <span>{this.props.post.likes}</span>
                    </div>
                    <div style={{width: '15%'}}>
                        <Button type="link" style={{top: '-5px'}}>
                            <Icon type="dislike" style={{color: '#000'}}/>
                        </Button>
                        <span>{this.props.post.dislikes}</span>
                    </div>
                    <div style={{width: '15%'}}>
                        <Button type="link" style={{top: '-5px'}}>
                            <Icon type="heart" style={{color: '#000'}}/>
                        </Button>
                    </div>
                    <div style={{width: '15%'}}>
                        <Button style={{width: '80%'}}>Share</Button>
                    </div>
                    <div style={{width: '15%'}}>
                        <Button style={{width: '80%'}}>Report</Button>
                    </div>
                    <div style={{width: '15%'}}>
                        <Button style={{width: '80%'}}>...</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard