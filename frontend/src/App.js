import React, { Component } from 'react'
import Login from './containers/User/Login'
import Register from './containers/User/Register'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./containers/Home"
import './index.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginSuccess } from './containers/User/store/actions'

class App extends Component {
    componentDidMount() {
        const logged = localStorage.getItem('logged')
        // check if user has logged in in this session
        if (logged !== null) {
            this.props.loginSuccess(JSON.parse(logged))
        }
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <div className='body'>
                        <Header/>
                        <div style={{backgroundColor: 'rgba(191, 191, 191, 1)'}}>
                            <Switch>
                                <Route path='/login' exact component={Login}/>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' exact component={Register}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
})
const actionCreators = {loginSuccess}
export default connect(mapStateToProps, actionCreators)(App)