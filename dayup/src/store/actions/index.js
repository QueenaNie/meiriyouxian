
import * as Types from '../action-types'
import {getDetSliders} from '../../CartApi/detSliders'
export default {
    getDetSlider(){
        return function (dispatch,getState) {
           //promise 的实例
            getDetSliders().then(detSliders=>{
                // console.log(detSliders);//detSliders 代表请求之后的数据
                dispatch({
                    type:Types.DETAIL_SLIDER,
                    payload:detSliders
                })
            })
        }
    },
}


 