import axios from 'axios'

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

const prefix = "https://dwo0tbj14j3pa.cloudfront.net"

export default class APIServices {
    getRoom(pk) {
        const url = `${prefix}/api/room/${pk}`
        return axios.get(url).then(response => response.data)
    }

    getCity(city) {
        const url = `${prefix}/api/room/search?location=${city}`
        return axios.get(url).then(response => response.data)
    }

    userLogin(email, password) {
        const url = `${prefix}/auth`
        const body = {
            email: email,
            password: password
        }
        console.log(body)
        return axios.post(url, body)
    }

    userRegister(email, username, password) {
        const url = `${prefix}/register`
        const body = {
            username: username,
            email: email,
            password: password
        }
        return axios.post(url, body)
    }
}