import React from 'react';
import {connect} from 'react-redux'
import DetailSlider from "./detailSlider";
import DetailHeader from "./detailHeader";
import actions from "../../store/actions/index";
import {Link} from 'react-router-dom'
import './details.less'
class Detail extends React.Component{
    componentDidMount(){
        this.props.getDetSlider();

    }
    render(){

        return <div className='detail'>
            <DetailHeader />
            <div className='scrollBox'>
                {/*轮播图*/}
                <div className='sliderT'>
                    <div className='sliderC'>
                        <DetailSlider detSliders={this.props.detSliders}/>
                    </div>

                </div>

                {/*详情1*/}
                <div className=' contentOne'>
                    <div className='contentTit'>板栗味的南瓜  软甜沙糯</div>
                    <div className='contentCon'>优选贝贝南瓜300g</div>
                    <div className='price'>
                        <span><i>￥</i>12.9</span>
                        <span className='amount'>已邮67103份</span>
                    </div>
                    <div className='place'>
                        <div className='promotion-attr'>
                        <span  className=' promotion-img'> </span> <div className='image-text'>产地中国</div>
                    </div>
                        <div className='promotion-attr'>
                            <span className='promotion-img'> </span>
                            <div className='image-text'>次日达</div></div>
                        <div className='promotion-attr'><span className='promotion-img'> </span> <span className='image-text' >实付满69包邮</span></div>
                    </div>
                </div>

                {/*详情2*/}
                <div className='contentTwo'>
                    <div className='contentXQ'>
                        <div className='contentImg'>
                            <img src="https://j-image.missfresh.cn/img_20170823161352436.png" alt=""/>
                        </div>
                        <div className='zhifu'>
                        <pre>
                          <p>支付8元开会员</p>
购买本商品更返<span>0.39</span>元
                        </pre>
                        </div>
                        <div className='go'> 去开通
                           <i className='iconfont icon-iconfontjiantou2'> </i>
                        </div>
                    </div>
                </div>

                {/*详情3*/}
                <div className='info'>
                    <div className='infoImg'>
                        <img src="https://j-image.missfresh.cn/img_20171029215450695.png" alt=""/>
                        <span className='infoContent'>该商品分享可领49减20红包

      </span>
                        <span className='goShare'>去分享 <i className='iconfont icon-iconfontjiantou2'></i></span>
                    </div>

                    <p className='infoText'>已经有97344人分享了该商品
                </p>
                </div>

                {/*详情4*/}
                <div className='security '>
                    <div className='security-tit'>
                        <span className='security-tit-title'>安心指纹</span>
                        <div className='security-box'>
                            <span className='security-tit-see'>点击查看 <i className='iconfont icon-iconfontjiantou2'></i> </span>
                        </div>
                    </div>
                   <p className='security-txt'>经14项感官排查，17项农残检测，100%可溯，为你鉴证每一口安心。</p>

                    <div className='scroll-box'>
                        <div className='security-item-wrap'>
                            <div className='security-item'>
                                <img src="https://j-image.missfresh.cn/img_20180313023856777.png" alt=""/>
                                <p className='item-text'>优鲜安心检测</p>
                            </div>
                            <div className='security-item'>
                                <img src="https://image.missfresh.cn/98c11779348e4bdbb93d24e5600036d2.png" alt=""/>
                                <p className='item-text'>100%品控检测</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*详情5*/}
                  <div className='buyer'>
                      <div className='person'>
                          <div className='flexbox'>
                              <i className='tip'>买手说 </i>
                              <div className='person-icon'><img src="https://image.missfresh.cn/a021ae1b84c34502a5b5481e2fca832d.png" alt=""/></div>
                              <div className='buyer-person-des'>
                                  <h3>Nero</h3>
                              </div>
                          </div>
                          <div className='person-des'>
                              <p>用9年专注国内外蔬菜，被称为挑剔的试吃官，力求让每个家庭吃上安心蔬菜。 </p>
                          </div>

                          <div className='buyerN'>
                              <div className='buyer-description'>
                                  <p className='marks'>
                                      <i className='iconfont icon-baojiaquotation2'></i>
                                  </p>
                                  <ul className='commodity'>
                                  <li>
                                      <p className='list-item'>富含维生素C和钾元素，热量较低。
                                      </p>
                                  </li>
                                  <li><p className='list-item'>一个小冬瓜约2-3人份量，适合家常烧菜，炖肉等。</p></li></ul>
                              </div>

                          </div>
                      </div>
                  </div>

                {/*详情6*/}
                <div className='container'>
                    <div className='list-container'>
                        <div className='title-container'>
                            <h3>商品详情</h3>
                            <ul className='list'>
                                <li className='list-item'><p className='list-item-text'>规格: 1袋</p></li>
                                <li className='list-item'><p className='list-item-text'>重量: 700g起</p></li>
                                <li className='list-item'><p className='list-item-text'>包装: 袋装 </p></li>
                                <li className='list-item'><p className='list-item-text'>保质期: 建议到货立即食用 </p></li>
                                <li className='list-item'><p className='list-item-text'>贮存方法: 冷藏</p></li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/*地址*/}
                <div className='address'>
                    <div className='address-choose'>
                        <div className='range'>
                            <i className='iconfont icon-dizhi'></i>
                            <span>送至 &nbsp; </span>
                            <span>北京市</span>
                            <img src="https://j-image.missfresh.cn/img_20161026155951214.png" alt=""/>
                        </div>
                        <div className='tips'>
                            本城市支持会员1小时达，选择详细地址完成匹配   <i className='iconfont icon-iconfontjiantou2'>  </i>
                        </div>

                    </div>

                    {/*底部*/}
                    <div className='footer'>

                        <div className='footer-text'>
                            <div className='icon' >
                                <Link to={'/carts'}>
                            <i className='iconfont icon-gouwuche'>  </i>
                                </Link>
                            </div>
                            <div className='footer-container'>
                                到货提醒
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}
export  default connect(state=>({...state.detailSlider}),actions)(Detail)
