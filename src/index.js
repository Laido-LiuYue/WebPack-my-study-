import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd-mobile/dist/antd-mobile.css';
import './index.less';
import './assets/common.less';
import Home from'./containers/Home';
// let ele = <h1>hello</h1>;
ReactDOM.render(
    <Home />,
    document.querySelector('#root')
)