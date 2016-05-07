require('normalize.css/normalize.css'); // 比较流行的 css reset
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
// 获取图片相关的数据
let imagesData = require('../data/imagesData.json'); // imagesData.json 文件

// 利用ES5的map函数, 添加imageURL图片路径信息
imagesData = imagesData.map(function(value){
  value.imageURL = require('../images/' + value.fileName);
  return value;
});

// Gallery by React App
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
      // <section className="stage">
      //   <section className="img-sec"></section>
      //   <nav className="controller-nav"></nav>
      // </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
