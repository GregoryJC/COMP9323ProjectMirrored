import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"

class Project extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {this.props.user.isAuth ? null : <Redirect to='/login'/>}

                <div style={{width: '90%', marginTop: '140px'}}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Project)