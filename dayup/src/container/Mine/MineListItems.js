import React from 'react';
import './index.less'
export default class MineHeader extends React.Component{
    render(){
        return <div>
            <div className='list-item rela'>
                我的订单
                <span className="turn-right"></span>
            </div>
            <div className='list-item rela'>
                我的地址
                <span className="turn-right"></span>
            </div>
            <div className='list-item rela'>
                账户与安全
                <span className="turn-right"></span>
            </div>
            <div className='list-item rela'>
                客户与帮助
                <span className="turn-right"></span>
            </div>
            <div className='list-item rela'>
                意见反馈
                <span className="turn-right"></span>
            </div>
            <div className='list-item rela'>
                关于我们
                <span className="turn-right"></span>
            </div>
        </div>
    }

}