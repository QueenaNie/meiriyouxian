import React from "react"
import { connect } from "react-redux";
import actions from "../../store/action/home"
import { loadMore, downRefresh } from "../../utils";
import Loading from "../../component/Loading/Loading"
class FindTwo extends React.Component {
    componentDidMount() {
        this.props.getLesson();
        // console.log(this.props.lessons);
        loadMore(this.content, this.props.getLesson);
        downRefresh(this.content, this.props.getLesson);
    }
    
    render() {
        let { list } = this.props.lessons;
        // this.img.style.backgroundImage=url({})
        // console.log(list);

        return <div>
            <div className="list-wrap" ref={(x) => { this.content = x }}>
                { list.length>0?
                    list.map((item, index) => {
                    return <div className="module-wrap" key={index}>
                        {item.id == "3" ? <div className="list-header">
                            <p className="list-title">{item.main}</p>

                        </div> : null}
                        <div className="article-list-wrap">

                            {item.id == "4" ? <div className="article-big"><div className="big-wrap">
                                <div className="article-card">
                                    <div className="article-author">
                                        <img src="https://j-image.missfresh.cn/img_20180628193259064.png" />
                                        <span>{item.username}</span>
                                    </div>
                                    <div className="article-cover">
                                        <div className="article-image"
                                          style={{backgroundImage:`url(${item.url})`}}></div>
                                         
                                    </div>
                                    <h3 className="article-title">
                                        {item.titles}
                                    </h3>
                                    <div className="article-control">
                                        <div className="article-read">{item.read}</div>
                                        <div className="control-btn">
                                            <div className="btn-share">
                                                <i className="iconfont icon-iconfontfenxiang3"></i>
                                                分享
                                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div> : null}
                            {item.id == "5" ? <div className="article-big"><div className="big-wrap">
                                <div className="asc-wrap">
                                    <div className="article-img" >
                                        <div className="img-load"
                                          style={{backgroundImage:`url(${item.url})`}}></div>
                                    </div>
                                    <div className="article-info">
                                        <div className="follow-user-item">
                                            <img className="user-touxiang" src="https://j-image.missfresh.cn/img_20180803163114440.jpg" />
                                            <span className="user__name">{item.username}</span>
                                        </div>
                                        <p className="article__title">
                                            {item.titles}
                                        </p>
                                        <div className="article-tool">
                                            <div className="tool-left">
                                                <span className="article-tool-view">{item.read}</span>
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
                            </div> : null}
                        </div>

                    </div>


                }):<Loading/>}
                <p className="no-more">我也是有底线的~~~</p>
            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }), actions)(FindTwo);