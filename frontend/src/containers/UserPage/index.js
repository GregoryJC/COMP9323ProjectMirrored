import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ChangePassword from "./subpages/ChangePassword"
import MyInfo from "./subpages/MyInfo"
import MyAbility from './subpages/MyAbility'
// import MyAbility from './subpages/MyAbility'
// import MyAbility from './subpages/MyAbility'

import './style.css'
import { Avatar, Layout, Menu } from "antd"

const {Sider, Content} = Layout


class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoList: ['Info', 'My abilities', 'My posts', 'My projects', 'Change password'],
            listIndex: '0',
        }
    }

    handleClick = (e) => {
        this.setState({'listIndex': e.key})
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}
                <Layout style={{padding: "80px", display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{margin: 16}}>My Profile</h1>
                    <Layout>
                        <Sider width={300} style={{background: "#fff"}}>
                            <Menu mode="inline"
                                  defaultSelectedKeys={['0']}
                                  style={{height: "100%"}}
                                  onClick={this.handleClick}>
                                <div style={{textAlign: 'center'}}>
                                    <Avatar size={64} src={this.props.user.avatar} style={{margin: "30px 0px 30px 0px"}}/>
                                    <p>{this.props.user.nickname}</p>
                                </div>
                                <Menu.Item key='0'>
                                    <span>{this.state.infoList[0]}</span>
                                </Menu.Item>
                                <Menu.Item key='1'>
                                    <span>{this.state.infoList[1]}</span>
                                </Menu.Item>
                                <Menu.Item key='2'>
                                    <span>{this.state.infoList[2]}</span>
                                </Menu.Item>
                                <Menu.Item key='3'>
                                    <span>{this.state.infoList[3]}</span>
                                </Menu.Item>
                                <Menu.Item key='4'>
                                    <span>{this.state.infoList[4]}</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{background: "#fff", padding: 24, minHeight: 800}}>
                            {this.state.listIndex === "0" ? <MyInfo/> : null}
                            {this.state.listIndex === "1" ? <MyAbility/> : null}
                            {this.state.listIndex === "4" ? <ChangePassword/> : null}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )

    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(UserPage)