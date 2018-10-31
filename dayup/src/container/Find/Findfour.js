import React from "react"
import { connect } from "react-redux";
import actions from "../../store/action/home"
import { loadMore, downRefresh } from "../../utils";
import Loading from "../../component/Loading/Loading"
class FindFour extends React.Component {
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
                {list.length>0?
                list.map((item, index) => {
                    return <div className="module-wrap" key={index}>

                        <div className="article-list-wrap">

                            {item.id == "1" ? <div className="article-big"><div className="big-wrap">
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
</div>

                    </div>


                }):<Loading/>}
                <p className="no-more">我也是有底线的~~~</p>
            </div>
        </div>
    }
}
export default connect(state => ({ ...state.home }), actions)(FindFour);