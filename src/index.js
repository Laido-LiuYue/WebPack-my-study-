import React from 'react';
import ReactDOM from 'react-dom';
import Home from'./containers/Home';
// import 'antd-mobile/dist/antd-mobile.css';
import './index.less';
// let ele = <h1>hello</h1>;
ReactDOM.render(
    <Home />,
    document.querySelector('#root')
)