import React, { Component } from 'react'
import { connect } from 'react-redux'
import AbilityCard from "./AbilityCard"

class MyAbility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            abilityList: []
        }
        this.abilityList = []
    }

    componentDidMount() {
        for (let i = 0; i < 12; i++) {
            this.abilityList.push(<AbilityCard key={i} abilityId={i}/>)
        }
        this.setState({abilityList: this.abilityList})
    }

    render() {
        return (
            <div className='p-4'>
                <div className='font-weight-bold'>My Abilities</div>
                <hr/>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    {this.state.abilityList}
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
)(MyAbility)
