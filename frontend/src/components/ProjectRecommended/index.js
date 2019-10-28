import React, { Component } from 'react'
import { Button } from "antd"

class ProjectRecommended extends Component {
    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', marginTop: '50px'}}>
                <Button type="primary" style={{height: '60px', borderRadius: '20px', margin: '30px', width: '90%'}}>
                    <span style={{fontSize: '20px', fontWeight: 'bolder'}}>Project Recommended for you</span>

                </Button>
            </div>
        )
    }
}

export default ProjectRecommended