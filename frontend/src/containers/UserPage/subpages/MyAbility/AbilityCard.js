import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faAndroid,
    faAngular,
    faCss3,
    faGit,
    faHtml5,
    faJava,
    faJs,
    faPhp,
    faPython,
    faSwift,
    faVuejs,
    faWordpress
} from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { ABILITY_SET } from "../../../../assets/constants"

library.add(faGit, faJava, faPython, faJs, faPhp, faCss3, faHtml5, faWordpress, faAndroid, faSwift, faAngular, faVuejs, faCheck, faTimes)

class AbilityCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.abilityId,
            canDo: false
        }
    }

    componentDidMount() {
        if (this.props.canDo === 1) {
            this.setState({canDo: true})
        }
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                width: '25%',
                height: '200px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div onClick={this.fuck} className="Ability-Card">
                    <div style={{width: '65%', height: '100%'}}>
                        <FontAwesomeIcon icon={["fab", ABILITY_SET[this.state.id]]} size={'5x'}
                                         style={{margin: '10px 0px 0px 20px'}}/>
                    </div>
                    <div style={{width: '35%', height: '100%'}}>
                        <FontAwesomeIcon icon={["fas", this.state.canDo ? "check" : "times"]} size={'3x'}
                                         style={{margin: '20px 0px 0px 7px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbilityCard