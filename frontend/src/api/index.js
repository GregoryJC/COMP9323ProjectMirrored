import axios from 'axios'

const qs = require('querystring');
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

const prefix = "http://3.24.134.149:8080"

export default class APIServices {
    // SIGN IN/SIGN UP
    userLogin(username, password) {
        const url = `${prefix}/api/login`
        const body = {
            username: username,
            password: password
        }
        return axios.post(url, qs.stringify(body), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }, withCredentials: true
        })
    }

    userRegister(username, password) {
        const url = `${prefix}/api/signup`
        const body = {
            username: username,
            password: password
        }
        return axios.post(url, qs.stringify(body), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }, withCredentials: true
        })
    }

    // POST
    getAllPosts() {
        const url = `${prefix}/api/post`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    getPost(pk) {
        const url = `${prefix}/api/post/${pk}`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    postPost(title, content) {
        const url = `${prefix}/api/post`
        const body = {
            title: title,
            content: content
        }
        return axios.post(url, body, {withCredentials: true})
    }

    postCommentPost(pk, content) {
        const url = `${prefix}/api/post/${pk}/comment`
        const body = {
            content: content
        }
        return axios.post(url, body, {withCredentials: true})
    }

    // OK
    getTopPost() {
        const url = `${prefix}/api/toppost`
        return axios.get(url).then(res => res.data)
    }

    getPostComment(pk) {
        const url = `${prefix}/api/post/${pk}/comment`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    getPostFromS3(url) {
        return axios.get(url).then(res => res.data)
    }

    // QUIZ
    // OK
    getQuizzes() {
        const url = `${prefix}/api/quiz`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }
    // OK
    getOneQuiz(pk) {
        const url = `${prefix}/api/quiz/${pk}`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    postAnswer(ans, pk) {
        const url = `${prefix}/api/quiz/${pk}`
        return axios.post(url, ans, {withCredentials: true})
    }

    // PROJECT
    getProjects() {
        const url = `${prefix}/api/project`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    getOneProject(pk) {
        const url = `${prefix}/api/project/${pk}`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    // PROFILE
    getProfile() {
        const url = `${prefix}/api/profile`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    getUserPosts() {
        const url = `${prefix}/api/profile/posts`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }

    getUserComments() {
        const url = `${prefix}/api/profile/comments`
        return axios.get(url, {withCredentials: true}).then(res => res.data)
    }
}