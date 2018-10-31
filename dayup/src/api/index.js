// ajax,axios,fetch,(在低版本的ie下是不支持的)--》发请求的方法

const HOST="http://localhost:3001";
//fetch返回一个promise的实例
//获取数据
export function get(url) {
    //response:代表整个响应对象，里面有状态码，响应体等等
    //response.json:把响应体的数据返回出去
    return fetch(HOST+url).then(response=>response.json())
}
export function post(url,data) {
    // response : 是一个响应的对象；里面有状态码；响应体；
    // response.json : 把响应体的数据返回出去；
    return fetch(HOST+url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"// 接收json格式的项数据类型；
        },
        body:JSON.stringify(data)
    }).then(response=>response.json())
}


 


 