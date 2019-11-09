import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { logout } from "../../containers/User/store/actions"

import './style.css'

class Header extends Component {
    menu = (
        <Menu>
            <Menu.Item>
                <Link to="/userpage">
                    Profile
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/" onClick={this.props.logout}>
                    Logout
                </Link>
            </Menu.Item>
        </Menu>
    )

    render() {
        return (
            <div className="Header">
                <div className="Header-Body">
                    <div style={{width: '10%'}}>
                        <Link to="" style={{position: 'absolute', top: '10px', marginLeft: '5%'}}>
                            <img src={require('../../assets/images/logo.png')} alt="logo"
                                 style={{height: '60px', borderRadius: '3px'}}/>
                        </Link>
                    </div>
                    <div className="Header-Middle"/>
                    <div className="Header-Right">
                        {this.props.user.isAuth ?
                            <div className="Header-Navigator">
                                <Link className="Header-Link" to="/quizzes">Quizzes</Link>
                                <Link className="Header-Link" to="/projects">Projects</Link>
                                <Dropdown overlay={this.menu}>
                                    <a className="Header-Link" href="/#">
                                        Hello {this.props.user.nickname} <Icon type="down"/>
                                    </a>
                                </Dropdown>
                            </div> :
                            <div className="Header-Navigator">
                                <Link className="Header-Link" to="/quizzes">Quizzes</Link>
                                <Link className="Header-Link" to="/projects">Projects</Link>
                                <Link className="Header-Link" to="/register">Register</Link>
                                <Link className="Header-Link" to="/login">Login</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    user: state.user
})
const actionCreators = {logout}
export default connect(mapStatetoProps, actionCreators)(Header)