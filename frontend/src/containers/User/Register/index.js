import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Icon, Input, Popover } from "antd"
import { userRegister } from "../store/actions"
import { connect } from "react-redux"

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordConfirm: '',
        }
        this.userRegister = this.userRegister.bind(this)
    }

    userRegister() {
        let email = this.state.email
        let username = this.state.username
        let password = this.state.password
        let passwordConfirm = this.state.passwordConfirm
        console.log(email, username, password)
        this.props.userRegister(email, username, password, passwordConfirm)
    }

    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        const passwordHint = "Password must be at least eight characters long and contain at least one lowercase letter, one uppercase letter, one number."
        const emailHint = "Available email address, for example: abc@gmail.com"
        const nameHint = "Your display name on website"
        const confirmPasswordHint = "Enter password again, must be the same as password"
        return (
            <div className="Login">
                {this.props.user.isAuth ? <Redirect to='/'/> : null}
                <div className="Image-Div">
                    <img src={require("../../../assets/images/login-background.jpg")} alt="background"
                         className="Home-Image"/>
                </div>
                <div className="Login-Outside" style={{top: '20%', display: 'flex', justifyContent: 'center'}}>
                    <div className="Login-Card">
                        <div className="Login-Container">
                            <div style={{marginTop: '10%', height: '15%'}}>
                                <h2>Sign up</h2>
                            </div>
                            <Form>
                                <Form.Item>
                                    <Input prefix={<Popover placement="topLeft" content={emailHint}
                                                            title={"Email"}><Icon type="mail"
                                                                                  style={{color: 'rgba(0,0,0,.25)'}}/></Popover>}
                                           placeholder="Email"
                                           onChange={value => {
                                               this.handleChange('email', value)
                                           }}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Popover placement="topLeft" content={nameHint}
                                                            title={"Username"}><Icon type="user"
                                                                                     style={{color: 'rgba(0,0,0,.25)'}}/></Popover>}
                                           placeholder="Username"
                                           onChange={value => {
                                               this.handleChange('username', value)
                                           }}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        style={{width: '100%'}}
                                        prefix={<Popover placement="topLeft" content={passwordHint}
                                                         title={"Password"}><Icon type="lock"
                                                                                  style={{color: 'rgba(0,0,0,.25)'}}/></Popover>}
                                        type="password"
                                        placeholder="Password"
                                        onChange={value => {
                                            this.handleChange('password', value)
                                        }}/>
                                </Form.Item>
                                <Form.Item>
                                    <Input
                                        prefix={<Popover placement="topLeft" content={confirmPasswordHint}
                                                         title={"Confirm Password"}><Icon type="lock"
                                                                                          style={{color: 'rgba(0,0,0,.25)'}}/></Popover>}
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={value => {
                                            this.handleChange('passwordConfirm', value)
                                        }}/>
                                </Form.Item>
                            </Form>
                            {this.props.user.errorMsg ?
                                <div style={{height: '6%'}}>
                                    <img src={require("../../../assets/images/Invalid.png")} style={{height: '20px'}}
                                         alt='invalid'/>
                                    <span>{this.props.user.errorMsg}</span>
                                </div>
                                :
                                <div style={{height: '6%'}}>
                                    <br/>
                                </div>
                            }
                            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                                <button className="mdl-card__title" type="submit" onClick={this.userRegister}>Register
                                </button>
                            </div>
                            <span>Already have an account?&nbsp;</span>
                            <Link to='login'>
                                <span>Login here</span>
                            </Link>
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
const actionCreators = {userRegister}
export default connect(mapStateToProps, actionCreators)(Register)