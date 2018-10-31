
import * as Types from '../action-types'
import {getCarts} from '../../CartApi/carts'
export default {
    getCart(){
        return function (dispatch,getState) {
            //console.log(getCarts()); //promise 的实例
            getCarts().then(carts=>{
                // console.log(carts);//carts 代表请求之后的数据
                dispatch({
                    type:Types.JUMP_CART,
                    payload:carts
                })
            })
        }
    },
}