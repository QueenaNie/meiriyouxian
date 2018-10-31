import React, {Component} from "react"
import ReactSwipe from 'react-swipe';
export default  class HomeSlider extends Component{
     constructor(){
         super();
         this.state={
             index:0
         }
     }
     render(){
        // console.log(this.props);
         let option={continuous: true,auto:2000,callback:(index)=>{this.setState({index})}};
         return <div className="home-slider">
             <ReactSwipe className="carousel"  swipeOptions={option} key={this.props.slider.length}>
                 {
                     this.props.slider.map((item,index)=>{
                        // console.log(item);
                         if (item.id===this.props.id){
                             return item.slider.map((item1,index)=>{
                                 // console.log(item1);
                                 return <div key={index}>
                                     <img src={item1} alt=""/>
                                 </div>
                             })
                         }
                     })
                 }
             </ReactSwipe>
         </div>
     }
 }


 