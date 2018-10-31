import  {get} from "./index"
export function getNav() {
    return get('/getHomeNav')
}
export function getSlider() {
    return get('/getSliders')
}
export function getCategory() {
    return get('/getHomeCategory')
}
export function getProduce(produce,offset,limit) {
    return get(`/getHomeProduce/${produce}?offset=${offset}&limit=${limit}`)
}




 