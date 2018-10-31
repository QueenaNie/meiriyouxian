import React from 'react';
import './details.less';
import img from '../../imagesCarts/detailHeader1.png'

export default class DetailHeader extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    // isShow=()=>{
    //     this.setState=({
    //        show:!this.state.show
    //     });
    // };
    render(){
        return <div className='shangpinT'>
            <div className='shangpin'>
               <div className='shangpinXQ'>商品详情</div>
            <div className='shangpinI' >
                <div onClick={this.isShow}>
                    <img src={img} alt=""/>
                    {/*{!this.state.show?<ul className='header-course'>*/}
                        {/*<li >微信好友</li>*/}
                        {/*<li >朋友圈</li>*/}
                        {/*<li >取消</li>*/}
                {/*</ul>:null}*/}

                </div>

            </div>
            </div>
        </div>
    }
}