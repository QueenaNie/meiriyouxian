import React from 'react';
import './index.less'
export default class MineHeader extends React.Component{
    render(){
        return <div className='user_items'>
            <ul>
                <li>
                    <span>
                        <i>0</i>
                        元
                    </span>
                    <span>
                    余额 · 储值
                        <i>
                            <img src='https://j-image.missfresh.cn/img_20180205201631182.gif'/>
                        </i>
                    </span>
                </li>
                <li>
                    <span>
                        <i>0</i>
                        个
                    </span>
                    <span>红包</span>
                </li>
                <li>
                    <span>
                        <i>0</i>
                        张
                    </span>
                    <span>商品券</span>
                </li>
                <li>
                    <span>
                        <i></i>
                        分
                    </span>
                    <span>积分兑换></span>
                </li>
            </ul>
        </div>
    }

}