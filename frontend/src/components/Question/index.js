import React, { Component } from 'react'
import { Radio } from 'antd'


class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {value: 0}
    }

    onChange = (id, e) => {
        this.setState({
            value: e.target.value,
        })
        this.props.onInputChange(id, e.target.value - 1)
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        }
        const options = this.props.options.split(',')
        return (
            <div style={{height: '80%', border: '1px solid #000', padding: '30px', backgroundColor: '#fff'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Question #{this.props.mark}</h2>
                        <p>{this.props.content}</p>
                    </div>
                    <Radio.Group onChange={(e) => this.onChange(this.props.id, e)}
                                 value={this.state.value}>
                        <Radio style={radioStyle} value={1}>
                            {options[0]}
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            {options[1]}
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            {options[2]}
                        </Radio>
                        <Radio style={radioStyle} value={4}>
                            {options[3]}
                        </Radio>
                    </Radio.Group>
                </div>
            </div>
        )
    }
}

export default Question