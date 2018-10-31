import React from 'react';
// import {withRouter} from 'react-router-dom'
export default class CartsHeader extends React.Component {
    constructor(){
        super();
       this.state={
           ary:[]
       }
    }

    render() {
        console.log(typeof this.props.carts);//object
         let info=(JSON.stringify(this.props.carts));
        console.log(info);
        return <div>
            <div className='cart-header' >
                {this.state.ary.length===0?
                    <div className='header-bj'>
                        <p className='header-text'>您还没有添加任何商品</p>
                    </div>:<div>

                    </div>
                }

                </div>



            </div>

    }
}
// export default withRouter(CartsHeader)



