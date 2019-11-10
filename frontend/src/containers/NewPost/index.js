import React, { Component } from 'react'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { Divider, Input, Button } from "antd"


class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "My title",
            textValue: "**Hello world!!!**",
            mdeValue: "**Hello world!!!**"
        }
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    submitPost = () => {
        console.log('title')
        console.log(this.state.title)
        console.log('mde')
        console.log(this.state.mdeValue)
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '80%', margin: '140px', display: 'flex', flexDirection: 'column'}}>
                    <p style={{fontWeight: 'bold'}}>Post Title</p>
                    <Input placeholder={this.state.title} onChange={event => {
                        this.handleChange("title", event.target.value)
                    }}/>
                    <Divider/>
                    <p style={{fontWeight: 'bold'}}>Post Content</p>
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                        <SimpleMDE
                            style={{width: '100%'}}
                            onChange={value => {
                                this.handleChange("mdeValue", value)
                            }}
                            value={this.state.textValue}
                            options={{
                                autofocus: true,
                                spellChecker: false
                            }}
                        />
                    </div>
                    <Button type={"primary"} onClick={this.submitPost} style={{width: '100px'}} >Submit</Button>
                </div>
            </div>
        )
    }
}

export default NewPost