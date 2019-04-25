let express = require('express');
let app = express();

app.listen(8080);
let list = [
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'目的地'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'亲子游学'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'酒店预订'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'车辆接送'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'签证代办'
    },
    {
        img:'https://raw.githubusercontent.com/HL1115/webpack/master/src/assets/imgs/list1.png',
        text:'精彩瞬间'
    }
]

let theme =[
    {
        type:0,
        tit:'意大利塞浦路斯+马耳他+西西里岛10晚13天'
    },
    {
        type:0,
        tit:'意大利塞浦路斯'
    },
    {
        type:0,
        tit:'马耳他'
    },
    {
        type:1,
        tit:'意大利塞浦路斯'
    },
    {
        type:1,
        tit:'西西里岛10晚13天'
    },
    {
        type:2,
        tit:'西西里岛10晚13天'
    },
    {
        type:3,
        tit:'马耳他'
    }
]

app.get('/api/list',(req,res)=>{
    res.json(list)
})

app.get('/api/nav',(req,res)=>{
    console.log(req.query);
    let arr=theme.filter((item)=>req.query.id==item.type)
    res.json(arr);
})