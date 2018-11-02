//发送请求 的方式   ajax  axios（返回promise实例） fetch（在低版本 IE下 中不支持）
const HOST = 'http://localhost:3001';

//fetch 返回一个 promise 的实例；
//获取数据；
export function get(url) {
    //response  :代表整个响应对象：里面有状态码，响应体等；
    //response.json ：把响应体的数据返回出去；
    return fetch(HOST+url).then(response=>response.json())

}
export function post(url,data) {
    //response  :代表整个响应对象：里面有状态码，响应体等；
    //response.json ：把响应体的数据返回出去；
    return fetch(HOST+url,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
            'accept':'application/json'//设置响应头：接受json 格式的数据类型
        },
        body:JSON.stringify(data)
    }).then(response=>response.json())

}
