import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import store from "./store"
import Amplify from 'aws-amplify'
import * as serviceWorker from "./serviceWorker"

import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"

Amplify.configure({
    Auth: {
        region: 'ap-southeast-2',
        userPoolId: 'ap-southeast-2_h0dwByjbd',
        userPoolWebClientId: '62a60i7aqui266lsuenjen9uvl'
    }
})

// google analytics

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
