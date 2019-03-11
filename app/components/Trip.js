import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import '../css/home.less';
import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'
import { Carousel } from 'antd';

// import tsIcon1 from '../images/timg (1).jpg';
// import tsIcon2 from '../images/timg.jpg';
// import tsIcon3 from '../images/timg2.jpg';
// import tsIcon4 from '../images/u=1519848680,3237233859&fm=26&gp=0.jpg';
// const tsIcon1 = require('../images/timg (1).jpg');
// const tsIcon2 = require('../images/timg.jpg');
// const tsIcon3 = require('../images/timg2.jpg');
// const tsIcon4 = require('../images/u=1519848680,3237233859&fm=26&gp=0.jpg');


class Trip extends Component{
    constructor(props){
        super(props);
    }
    render (){
        var settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(<Carousel {...settings} autoplay effect="fade">        
            <div className="page1"> </div>
            <div className="page2"> </div>
            <div className="page3"> </div>
            <div className="page4"> </div>
          </Carousel>)
          
    }
}
module.exports = Trip;