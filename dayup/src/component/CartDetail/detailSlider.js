import React from 'react';
import ReactSwipe from 'react-swipe';
import Loading from '../../component/Loading/Loading'

export default class DetailSlider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        console.log(this.props.detSliders);
        let option ={continuous: true,
            auto:2000,
            callback:(index)=>{
                this.setState({index});
            }};
        return <div className='home-swipe'>
            { this.props.detSliders.length>0?<ReactSwipe className="carousel" swipeOptions={option} key={this.props.detSliders.length}>
                {/*轮播图*/}
                {
                    this.props.detSliders.map((item,index)=>{
                        return <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    })
                }
            </ReactSwipe>:<Loading/>}
                      {/*轮播图下标*/}
            <div className='focus'>
                {this.props.detSliders.map((item,index)=>{
                    return   <span key={index} className={index===this.state.index?'active':null}>{index+1}</span>

                })}

            </div>

        </div>

    }
}