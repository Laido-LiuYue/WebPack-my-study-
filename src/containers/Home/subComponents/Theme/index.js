import React, { Component } from 'react';
import {connect} from 'react-redux';
// import item from 'antd-mobile/lib/popover/item';

class Theme extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <li key={index}>{item.tit}</li>
                        )
                    })
                }
            </ul>
        );
    }
}
let mapStateToProps =(state)=>{
    return {
        data:state
    }
}
export default connect(mapStateToProps)(Theme);
