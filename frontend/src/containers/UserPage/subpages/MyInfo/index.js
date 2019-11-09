import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyInfo extends Component {
    render() {
        return (
            <div className='p-4'>
                <div className='font-weight-bold'>My Details</div>
                <hr/>
                <div className="row mb-2">
                    <div className="col-2">Username:</div>
                    <div className="col-2">{this.props.user.nickname}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-2">Email:</div>
                    <div className="col-2">{this.props.user.email}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
)(MyInfo)
