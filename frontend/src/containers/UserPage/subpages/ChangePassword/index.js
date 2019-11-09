import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Button, Form, Icon, Input } from "antd"
import { userLogin } from "../../../User/store/actions"
import APIServices from "../../../../api"


const apiServices = new APIServices()

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            oriPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            isChanged: '',
            resultMsg: '',
        }
        this.userLogin = this.userLogin.bind(this)
    }

    componentDidMount() {
        this.setState({email: this.props.user.email})
    }

    userLogin() {
        let email = this.state.email
        let password = this.state.newPassword
        this.props.userLogin(email, password)
    }

    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }

    resetPassword = async (email, oriPassword, newPassword, newPasswordConfirm) => {
        const passwordReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
        if (!oriPassword) {
            this.setState({resultMsg: 'Password should not be empty'})
            return
        }
        if (newPassword !== newPasswordConfirm) {
            this.setState({resultMsg: 'Password and confirmed password should be same'})
            return
        }
        if (passwordReg.test(oriPassword) === false) {
            this.setState({resultMsg: 'Password format not satisfied'})
            return
        }
        try {
            const res = await apiServices.userResetPassword(this.state.email, oriPassword, newPassword)
            console.log(res)
            this.setState({isChanged: true, resultMsg: ''})
            // success
            this.userLogin(this.state.email, newPassword)


        } catch (err) {
            console.log(err)
            this.setState({isChanged: false})
            this.setState({resultMsg: 'Password is wrong'})
        }
    }

    handleClick = () => {
        this.resetPassword(this.state.email, this.state.oriPassword, this.state.newPassword, this.state.newPasswordConfirm)
    }


    render() {
        return (
            <div className='p-4'>
                <div className='font-weight-bold'>Change Password</div>
                <hr/>
                <Form style={{maxWidth: '400px'}}>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Old Password"
                            onChange={value => {
                                this.handleChange('oriPassword', value)
                            }}/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="New Password"
                            onChange={value => {
                                this.handleChange('newPassword', value)
                            }}/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Confirm New Password"
                            onChange={value => {
                                this.handleChange('newPasswordConfirm', value)
                            }}/>
                    </Form.Item>
                </Form>
                <Button onClick={this.handleClick} style={{marginBottom: '20px'}}>Change</Button>
                {this.state.resultMsg !== '' ?
                    <Alert
                        message="Error Text"
                        description={this.state.resultMsg}
                        type="error"
                        closable
                    /> : null}
                {this.state.isChanged === true ?
                    <Alert
                        message="Succeed Text"
                        description="ok"
                        type="success"
                        closable
                    /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {userLogin}
export default connect(mapStateToProps, actionCreators)(ChangePassword)