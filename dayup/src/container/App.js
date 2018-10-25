import React  from "react"
import Nav from "../component/Nav/index"
export default class App extends React.Component{
   render(){
       return <div>
           {this.props.children}
           <Nav/>
       </div>
   }
}


 