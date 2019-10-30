import React, { Component } from 'react'
import { Radio } from 'antd'


class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onChange = (id, e) => {
        // console.log(e.target)
        // console.log(id)
        // console.log('radio checked', e.target.value)
        this.setState({
            value: e.target.value,
        })
        this.props.onInputChange(id, e.target.value)
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        }
        return (
            <div style={{height: '80%', border: '1px solid #000', padding: '30px', backgroundColor: '#fff'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Question #{this.props.question.number}</h2>
                        <p>{this.props.question.content}</p>
                    </div>
                    <Radio.Group onChange={(e) => this.onChange(this.props.question.number, e)}
                                 value={this.state.value}>
                        <Radio style={radioStyle} value={1}>
                            Option A
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                            Option B
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                            Option C
                        </Radio>
                        <Radio style={radioStyle} value={4}>
                            Option D
                        </Radio>
                    </Radio.Group>
                </div>
            </div>
        )
    }
}

export default Question