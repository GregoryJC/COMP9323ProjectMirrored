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
                height: '60px',
                background: '#fff',
                borderBottom: '1px solid rgba(191, 191, 191, 1)',
                padding: '10px'
            }}>
                <div style={{
                    // width: '90%',
                    marginLeft: '3%',
                    height: '40px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Link to={`/posts/${this.props.id}`} className="Customized-Link" style={{height: '20px'}}>
                        <span style={{fontWeight: 'bold'}}>{this.props.title}</span>
                        <br/>
                        <span>{this.props.author}</span>
                    </Link>
                    <div>
                        <span>{this.props.time}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostBar