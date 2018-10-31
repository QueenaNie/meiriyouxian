let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//const _ = require('lodash');
//let cors = require('cors');
//CORS
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"http://localhost:9000");//来源的域名和端口号
    res.header('Access-Control-Allow-Headers',"Content-Type,Accept");//允许的跨域头
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,OPTIONS,DELETE");//允许的方法
    //如果请求的方法名是OPTIONS的话，则直接结束 请求
    //options探测请求 当客户端发送post请求之后行发送一个options请求，看看服务器支持不支持post请求
    if(req.method == 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        next();
    }
});
app.use(bodyParser.json());
let homeNav=require('./home/homeNav');
app.get('/getHomeNav',function(req,res){
    res.json(homeNav);
});
let sliders = require('./home/homeSlider');
app.get('/getSliders',function(req,res){
    res.json(sliders);
});
let homeCategory = require('./home/homeCategory');
app.get('/getHomeCategory',function(req,res){
    res.json(homeCategory);
});
let homeProduce = require('./home/homeProduce');
app.get('/getHomeProduce/:produce',function(req,res){
    let produce = req.params.produce;// all react vue 当前的分类
    let {offset,limit} = req.query;
    offset = isNaN(offset)?0:parseInt(offset);//起始的索引
    limit = isNaN(limit)?4:parseInt(limit);//每页的条数
    let list = JSON.parse(JSON.stringify(homeProduce));//深度克隆lessons
    if(produce != 'all'){
        list = list.filter(item=>item.produce == produce);
    }
    let total = list.length;//此分类下面的总条数
    list = list.slice(offset,offset+limit);//截取当前页的数据
    list.forEach(item=>item.title = item.title );
    res.json({
        list,
        hasMore:total>offset+limit
    });
});
app.listen(3001);


 