import React, { Component } from 'react'
import { connect } from 'react-redux'
import AbilityCard from "./AbilityCard"
import { SKILL_SET_BACKEND } from "../../../../assets/constants"
import APIServices from "../../../../api"

const apiServices = new APIServices()
class MyAbility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            abilityList: [],
            skills: 0
        }
        this.abilityList = []
    }

    componentDidMount() {
        let canDoList = new Array(12).fill(0)
        this.getProfile().then(res => {
            const mySkills = res.skill
            if (mySkills !== null) {
                this.setState({skills: mySkills.length})
                for (let i = 0; i < mySkills.length; i++) {
                    console.log(mySkills[i])
                    console.log(SKILL_SET_BACKEND.indexOf(mySkills[i]))
                    canDoList[SKILL_SET_BACKEND.indexOf(mySkills[i])] = 1
                }
            }
            for (let i = 0; i < 12; i++) {
                this.abilityList.push(<AbilityCard key={i} abilityId={i} canDo={canDoList[i]} history={this.props.history}/>)
            }
            this.setState({abilityList: this.abilityList})
        }).catch(e => {
            console.log(e)
        })
    }

    getProfile = async () => {
        return await apiServices.getProfile()
    }

    render() {
        return (
            <div className='p-4'>
                <p className='font-weight-bold'>My Abilities: {this.state.skills} certificated</p>
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
