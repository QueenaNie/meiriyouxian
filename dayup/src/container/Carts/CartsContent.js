import React from 'react';
import {Link ,withRouter} from 'react-router-dom'
 export default class CartsContent extends React.Component {
    constructor(){
       super();
    }
    render() {
        return <div className='cart-content'>
            <h2>推荐商品</h2>
            <ul className='content-list'>
                {this.props.carts.map((item,index)=>{
                    return <li key={index} className='content-list-item'>
                        <Link to={'/detail'}>
                        <div className='content-list-item-box'>
                            <div className="content-list-item-image">
                                <img src={item.url} alt="图片路径"/>
                            </div>
                        </div>
                        <p className='content-list-item-title'>{item.title}</p></Link>
                        <a href="" className='content-list-item-price'>
                            {item.price}
                        </a>

                            <img src={item.src} alt="购物车图标" className='content-list-item-src' onClick={()=>{}}/>

                    </li>
                })}

            </ul>
            <p>没有更多了...</p>
        </div>
    }
}



