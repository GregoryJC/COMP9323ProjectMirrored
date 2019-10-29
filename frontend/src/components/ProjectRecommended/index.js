import React, { Component } from 'react'
import { Button } from "antd"

class ProjectRecommended extends Component {
    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', marginTop: '50px', alignItems: 'center'}}>
                <Button type="primary" style={{height: '90px', borderRadius: '20px', margin: '30px', width: '90%'}}>
                    <span style={{fontSize: '20px', fontWeight: 'bolder'}}>Project Recommended for you</span>
                </Button>

                <div style={{height: '95%', width: '95%'}}>
                    <img src={'https://lingxu.s3-ap-southeast-2.amazonaws.com/u41.jpg'}
                         alt="123"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    />
                </div>
                <div style={{margin: '20px'}}>
                    <h3>User 01</h3>
                    <span>We are looking for 2 front-end developers.</span>
                </div>
            </div>
        )
    }
}

export default ProjectRecommended