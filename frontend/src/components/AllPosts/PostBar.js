import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '80px',
                background: '#fff',
                borderBottom: '1px solid rgba(191, 191, 191, 1)',
                padding: '10px',
                // borderRadius: '3px'
            }}>
                {this.props.isComment ?
                    <div style={{
                        // width: '90%',
                        marginLeft: '3%',
                        height: '40px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{marginTop: '10px'}}>
                            <span>{this.props.comment}</span>
                            <br/>
                            <Link to={`/posts/${this.props.id}`} className="Customized-Link">
                                <span style={{fontStyle: 'italic', fontWeight: '500'}}>Check this post</span>
                            </Link>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <span>{this.props.time}</span>
                        </div>
                    </div> :
                    <div style={{
                        // width: '90%',
                        marginLeft: '3%',
                        height: '40px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Link to={`/posts/${this.props.id}`} className="Customized-Link" style={{marginTop: '10px'}}>
                            <span style={{fontWeight: '700'}}>{this.props.title}</span>
                            <br/>
                            <span>Author: </span>
                            <span style={{fontStyle: 'italic', fontWeight: '500'}}>{this.props.author}</span>
                        </Link>
                        <div style={{marginTop: '30px'}}>
                            <span>{this.props.time}</span>
                        </div>
                    </div>}

            </div>
        )
    }
}

export default PostBar