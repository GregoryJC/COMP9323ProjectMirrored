import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "antd"
import APIServices from "../../api"


const apiServices = new APIServices()

class GrowingPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id0: '',
            id1: '',
            id2: '',
            id3: '',
            id4: '',
            title0: '',
            title1: '',
            title2: '',
            title3: '',
            title4: '',
        }
    }

    componentDidMount() {
        this.getTopPosts().then(res => {
            for (let i = 0; i < 5; i++) {
                const stateId = "id" + i
                const stateTitle = "title" + i
                this.handleChange(stateId, res[i].id)
                this.handleChange(stateTitle, res[i].title)
            }
        }).catch(e => {
            console.log(e)
        })
    }

    handleChange(k, v) {
        this.setState({[k]: v})
    }

    getTopPosts = async () => {
        return await apiServices.getTopPost()
    }

    fuck = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="Home-Cards" style={{height: 'auto', fontWeight: 'bolder', alignItems: 'center'}}>
                <div>
                    <Button type="danger" className="Main-Button" onClick={this.fuck}>
                        <span style={{fontSize: '20px', fontWeight: 'bold'}}>Today's Top Growing Posts</span>
                    </Button>
                </div>
                <div style={{width: '90%'}}>
                    <p>
                        <span style={{fontSize: '24px', color: 'red'}}>1 &nbsp;</span>
                        <Link to={`/posts/${this.state.id0}`}
                              className="Customized-Link">{this.state.title0}</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px', color: 'orange'}}>2 &nbsp;</span>
                        <Link to={`/posts/${this.state.id1}`}
                              className="Customized-Link">{this.state.title1}</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px', color: 'green'}}>3 &nbsp;</span>
                        <Link to={`/posts/${this.state.id2}`}
                              className="Customized-Link">{this.state.title2}</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px'}}>4 &nbsp;</span>
                        <Link to={`/posts/${this.state.id3}`}
                              className="Customized-Link">{this.state.title3}</Link>
                    </p>
                    <p style={{marginTop: '30px'}}>
                        <span style={{fontSize: '24px'}}>5 &nbsp;</span>
                        <Link to={`/posts/${this.state.id4}`}
                              className="Customized-Link">{this.state.title4}</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default GrowingPosts