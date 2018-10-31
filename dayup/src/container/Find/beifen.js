import React from "react"
import FindSlider from "./FindSlider"
import {connect} from "react-redux";
import actions from "../../store/action/home"
class FindOne extends React.Component{
    componentDidMount(){
        this.props.getLesson();
        console.log(this.props.lessons);
        
    }
    render(){
        let  {list}  = this.props.lessons;
        return <div >
            <FindSlider/>            
            <div className="list-wrap">
                <div className="module-wrap">
                      <div className="list-header">
                        <p className="list-title">有奖话题</p>
                        <p className="list-desc">
                          <i></i>
                          赢YOYO限量定制周边
                        </p>
                      </div>
                      <div className="article-list-wrap">
                         <div className="article-big">
                             <div className="big-wrap">
                                 <div className="article-card">
                                     <div className="article-author">
                                         <img src="https://j-image.missfresh.cn/img_20180628193259064.png"/>
                                         <span>YOYO吃喝指南</span>
                                     </div>
                                     <div className="article-cover">
                                         <div className="article-image"></div>
                                     </div>
                                     <h3 className="article-title">
                                     【有奖互动】那些身高 180 的人，你们都是吃什么长大的？！
                                     </h3>
                                     <div className="article-control">
                                         <div className="article-read">浏览 8920</div>
                                         <div className="control-btn">
                                            <div className="btn-share">
                                              <i className="iconfont icon-iconfontfenxiang3"></i>
                                              分享
                                            </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="big-wrap">
                                <div className="asc-wrap">
                                   <div className="article-img">
                                       <div className="img-load"></div>
                                   </div>
                                   <div className="article-info">
                                      <div className="follow-user-item">
                                         <img className="user-touxiang" src="https://j-image.missfresh.cn/img_20180803163114440.jpg"/>
                                         <span className="user__name">醉鹅娘</span>
                                      </div>
                                      <p className="article__title">
                                         【午餐·柠檬香煎三文鱼】尝遍了中式美味，味蕾需要全新体验。
                                      </p>
                                      <div className="article-tool">
                                          <div className="tool-left">
                                              <span className="article-tool-view">浏览 13350</span>
                                          </div>
                                          <div className="tool-right">
                                               <span className="article-tool-share">
                                                  <i className="iconfont icon-iconfontfenxiang3"></i>
                                               </span>
                                          </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                         </div>
                      7777777777777
                      777777777777777
                      777777777777
                      </div>
                </div>
            </div>           
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(FindOne);