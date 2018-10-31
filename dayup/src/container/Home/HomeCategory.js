import React, {Component} from "react"

export default  class HomeCategory extends Component{
    render(){
        //console.log(this.props.category);
        return <div className="home-category">
            {this.props.category.map((item,index)=>{
                console.log(item.type);
                if (item.type){
                    return <div className="card-warp" key={index}>
                        { item.img.map((item1,index)=>{
                           return <img src={item1} alt="" key={index}/>
                    })}
                    </div>
                } else {
                    return <div className="lander-warp" key={index}>
                        <img src={item.img} alt=""/>
                        <p>{item.title}</p>
                    </div>
                }
            })
            }
        </div>
    }
 }
