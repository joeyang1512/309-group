import axios from 'axios';
import Qs from 'qs';

let http = axios.create({
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    transformRequest: data => Qs.stringify(data),
    timeout: 0
});

// 响应拦截器：从服务器获取结果 ~ 自己.THEN中间做的事情  （重要）
http.interceptors.response.use(response => {
    // 从服务器获取到数据了，我们只把响应主体信息传递给下一个TEHN
    return response.data;
}, reason => {
    // 从服务器没有获取数据（网络层失败）
    let response = null;
    if (reason) {
        // 起码服务器有响应，只不过状态码是4/5开头的
        response = reason.response;
        switch (response.status) {
            case 401:
                // 一般情况下都是未登录
                break;
            case 403:
                // 一般情况下是TOKEN过期
                break;
            case 404:
                // 地址不存在
                break;
        }
    } else {
        // window.navigator.onLine   ==> true有网，false断网
        if (!window.navigator.onLine) {
            alert('和抱歉，网络连接已经断开，请联网后再试~~');
        }
    }
    return Promise.reject(response);
});

http.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    token && (config.headers['Authorization'] = token);
    return config;
});

export default http;