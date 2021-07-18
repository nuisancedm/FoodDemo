import axios from 'axios'
var instance = axios.create({
    baseURL: '/api',//基础url  完整url=基础url+配置里写的url 有智能识别
    timeout: 1000, //超时时间
    headers: { 'X-Custom-Header': 'foobar' } //请求头
});
export default instance