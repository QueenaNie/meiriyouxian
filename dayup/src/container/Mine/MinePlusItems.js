import React from 'react';
import './index.less'
export default class MineHeader extends React.Component{
    render(){
        return <div>
                    <div className='plus-items'>
                        <ul>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20171028202643589.png"/>
                        </span>
                        <span>购物返现</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20171103161358679.png"/>
                        </span>
                        <span>会员专享价</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20171028202735028.png"/>
                        </span>
                        <span>1小时送达</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20180105021625371.png"/>
                        </span>
                        <span>专属红包</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20171028202909231.png"/>
                        </span>
                        <span>专属客服</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span>
                            <img src="https://j-image.missfresh.cn/img_20180105021607945.png"/>
                        </span>
                        <span>敬请期待</span>
                    </a>
                </li>
            </ul>
                    </div>
                    <div className="activities-wrap">
                        <div className="activities-list flex">
                            <div className="activities-item">
                                <img src="https://j-image.missfresh.cn/img_20181030192301873.png"/>
                            </div>
                            <div className="activities-item">
                                <img src="https://j-image.missfresh.cn/img_20180831004501446.png"/>
                            </div>
                            <div className="activities-item">
                                <img src="https://j-image.missfresh.cn/img_20180727114906842.png"/>
                            </div>
                        </div>
                    </div>
        </div>
    }

}