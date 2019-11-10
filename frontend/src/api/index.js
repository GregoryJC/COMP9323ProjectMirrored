import axios from 'axios'


axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

const prefix = "https://dwo0tbj14j3pa.cloudfront.net"


export default class APIServices {
    getRoomReviews(pk) {
        const url = `${prefix}/api/review/${pk}`
        return axios.get(url).then(response => response.data)
    }
}