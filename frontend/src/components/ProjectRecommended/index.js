import React, { Component } from 'react'
import { Button } from "antd"
import APIServices from "../../api"

const apiServices = new APIServices()

class ProjectRecommended extends Component {
    fuck = async () => {
        const allPosts = await apiServices.getOneProject(1)
        console.log(allPosts)
    }

    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', marginTop: '50px'}}>
                <div style={{alignItems: 'center'}}>
                    <div>
                        <Button type="primary" className="Main-Button" onClick={this.fuck}>
                            <span style={{fontSize: '20px', fontWeight: 'bolder'}}>Project Recommended for you</span>
                        </Button>
                    </div>
                    <div style={{height: '100%', width: '100%'}}>
                        <img src={'https://lingxu.s3-ap-southeast-2.amazonaws.com/u41.jpg'}
                             alt="123"
                             style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div style={{padding: '10px'}}>
                    <h3>User 01</h3>
                    <span>We are looking for 2 front-end developers.</span>
                </div>
            </div>
        )
    }
}

export default ProjectRecommended