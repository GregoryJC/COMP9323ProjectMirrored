import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { userLogin } from "../store/actions"
import { Form, Icon, Input } from 'antd'
import './style.css'



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.userLogin = this.userLogin.bind(this)
    }

    userLogin() {
        let email = this.state.email
        let password = this.state.password
        this.props.userLogin(email, password)
    }

    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        return (
            <div className="Login">
                {this.props.user.isAuth ? <Redirect to='/'/> : null}
                <div className="Image-Div">
                    <img src={require("../../../assets/images/login-background.jpg")} className="Home-Image"
                         alt="background"/>
                </div>
                <div className="Login-Outside" style={{top: '20%', display: 'flex', justifyContent: 'center'}}>
                    <div className="Login-Card">
                        <div className="Login-Container">
                            <div style={{marginTop: '10%', height: '20%'}}>
                                <h2>Login</h2>
                                <p>Welcome back</p>
                            </div>
                            <Form onSubmit={this.handleSubmit} style={{marginTop: '10%', height: '30%'}}>
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="Username" onChange={value => {
                                        this.handleChange('email', value)
                                    }}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="Password" onChange={value => {
                                        this.handleChange('password', value)
                                    }}
                                    />
                                </Form.Item>
                            </Form>
                            {this.props.user.errorMsg ?
                                <div style={{height: '10%'}}>
                                    <img src={require("../../../assets/images/Invalid.png")} style={{height: '20px'}}
                                         alt='invalid'/>
                                    <span>{this.props.user.errorMsg}</span>
                                </div>
                                :
                                <div style={{height: '10%'}}>
                                    <br></br>
                                </div>
                            }
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <button className="mdl-card__title" type="submit" onClick={this.userLogin}>Login
                                </button>
                            </div>
                            <div style={{marginTop: '10%'}}>
                                <span>New user? &nbsp;</span>
                                <Link to='register'>
                                    <span>Sign up now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {userLogin}
export default connect(mapStateToProps, actionCreators)(Login)