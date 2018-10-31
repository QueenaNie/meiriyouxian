import {get} from './index';
//获取购物车下面的数据
export  function getCarts(){
    return get('/getCarts')
}