import * as Types from "../action-types"
import {getNav,getSlider,getCategory,getProduce} from "../../api/home"
export default {
    homeNav(){
        return function (dispatch,getState) {
            getNav().then(homeNav=>{
                    dispatch({
                        type:Types.HOME_NAV,
                        payload:homeNav
                    })
            })
        }
    },
    homeSlider(){
        return function (dispatch,getState) {
            getSlider().then(sliders=>{
                dispatch({
                    type:Types.HOME_SLIDER,
                    payload:sliders
                })
            })
        }
    },
    homeCategory(){
        return function (dispatch,getState) {
            getCategory().then(homeCategory=>{
                dispatch({
                    type:Types.HOME_CATEGORY,
                    payload:homeCategory
                })
            })
        }
    },
    homeProduce(){
        return function (dispatch,getState) {
            let {currentTypes,homeProduce1:{offset,limit}} = getState().home;
            getProduce(currentTypes,offset,limit).then(homeProduce=>{
                console.log(homeProduce);
                dispatch({
                    type:Types.HOME_PRODUCE,
                    payload:homeProduce
                })
            })
        }
    }
}


 