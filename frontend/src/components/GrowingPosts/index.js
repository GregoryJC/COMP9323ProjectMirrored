import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd"

class GrowingPosts extends Component {
    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', fontWeight: 'bolder', alignItems: 'center'}}>
                <Button type="danger" style={{height: '60px', borderRadius: '20px', margin: '30px', width: '90%'}}>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>Today's Top Growing Posts</span>
                </Button>
                <div style={{width: '90%'}}>
                    <p>
                        <span style={{fontSize: '24px', color: 'red'}}>1 &nbsp;</span>
                        <Link to='/'
                              className="Customized-Link">10 Java Coding tips for beginners</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px', color: 'orange'}}>2 &nbsp;</span>
                        <Link to='/'
                              className="Customized-Link">10 Python Coding tips for beginners</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px', color: 'green'}}>3 &nbsp;</span>
                        <Link to='/'
                              className="Customized-Link">10 C# Coding tips for beginners</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px'}}>4 &nbsp;</span>
                        <Link to='/'
                              className="Customized-Link">10 C++ Coding tips for beginners</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px'}}>5 &nbsp;</span>
                        <Link to='/'
                              className="Customized-Link">10 PHP Coding tips for beginners</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default GrowingPosts