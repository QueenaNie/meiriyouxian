import React, {Component} from "react"
import MineHeader from './MineHeader'
import MineItems from './MineItems'
import MinePlus from './MinePlus'
import MinePlusItems from './MinePlusItems'
import MineListItems from './MineListItems'

export default class Mine extends Component{
    render(){
        return <div>
            <MineHeader/>
            <MineItems/>
            <MinePlus/>
            <MinePlusItems/>
            <MineListItems/>
        </div>
    }
}
