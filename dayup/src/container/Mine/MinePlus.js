import React from 'react';
import './index.less'
export default class MineHeader extends React.Component{
    render(){
        return <div className='user-plus'>
            <div className="plus-text">
                <p className="nav">
                    <span className="left">会员权益</span>
                    <span className="right">开通会员></span>   
                </p>
                <p className="plus-money">
                成为优享会员，预计1年将为你
                    <span className="pink">节省1121.30元 </span>
                </p>
            </div>
        </div>
    }

}