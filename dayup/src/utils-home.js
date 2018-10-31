export function loadMore(ele,callback) {
    console.log(ele);
    //可以根据当前元素滚动条的高度判断是否重新请求数据
    //如果当前盒子的高度+滚动条卷起的高度+10>盒子总高度，那么重新发送请求，重新获取数据
    setTimeout(()=>{
        console.log(2);
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        let clientH=document.documentElement.clientHeight||document.body.clientHeight;
        let scrollH=document.documentElement.scrollHeight||document.body.scrollHeight;
        if(scrollTop+clientH+10>scrollH){
            callback();
        }
    },200)
}

export function downRefresh(ele ,callback) {
    console.log(ele);
    //给元素绑定scroll事件，当元素的滚动条发生卷去时，执行对应的函数
   document.addEventListener("scroll",()=>{
        console.log(1);
       let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       let clientH=document.documentElement.clientHeight||document.body.clientHeight;
       let scrollH=document.documentElement.scrollHeight||document.body.scrollHeight;
        if(scrollTop+clientH+10>scrollH){
            callback();
        }
    })
}





 