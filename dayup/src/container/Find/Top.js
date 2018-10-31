import React from "react"
let bear =require("../../images/bear.png")
import "./index.less"
import FindOne from "./FindOne"
import FindTwo from "./FindTwo"
import FindThree from "./FindThree"
import FindFour from "./Findfour"
export default class Top extends React.Component{

  constructor(){
      super();
      this.state={ary:[
          {"content":"精选"},
          {"content":"快手食谱"},
          {"content":"甜点饮品"},
          {"content":"生活百科"}
        ],
         current:0
      }
  }
  
	handleClick(current){
            this.setState({current});

    }

    render(){
        return <div>


        <div className="top-wrap">
               <div className="controller-wrap">
                  <div className="controller-context">
                       <div className="controller-image">
                            <img src={bear}/>
                       </div>
                       <div className="controller-tablist">
                            <ul className="list-content" >
                                {/* <li className="list-item active">精选<i></i></li>
                                <li className="list-item">快手食谱<i></i></li>
                                <li className="list-item">甜点饮品<i></i></li>
                                <li className="list-item">生活百科<i></i></li> */}
                              {this.state.ary.map((item,index)=>{
                                  return <li key={index} 
                                            className={this.state.current==index?"list-item active":"list-item"}
                                           onClick={this.handleClick.bind(this,index)}>
                                  {item.content}<i></i></li>
                              })}
                            </ul>  
                            
                       </div>
                  </div>
               </div>
        </div>
       <div className="article-lists">
        {( ()=>{
            // console.log(this.state.current);
         switch(this.state.current){
             case 0:return <FindOne/>; break;
             case 1:return <FindTwo/>; break;
             case 2:return <FindThree/>; break;
             case 3:return <FindFour/>; break;
             default:return null;
          }
        }
        )()}

        </div>
        </div>
    }
}