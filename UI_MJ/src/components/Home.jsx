import React, { Component } from 'react';
import Carouselku from './Carouselku';
import Product from './Product';
import ContactDetail from './ContactDetail';
import ArticleRecent from './ArticleRecent';

class Home extends Component {

render () {
    return (
      <div className="container">
     <div className="row justify-content-center">
        <div className="my-4">
        <Carouselku />
        </div>
        <hr width="100%" align="center"></hr>
        <Product/>
        <hr width="100%" align="center"></hr>      
        <ArticleRecent/>
        <hr width="100%" align="center"></hr>
        <ContactDetail/>
        </div>
        </div>

      )
    }
}


export default Home;