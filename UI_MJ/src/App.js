import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { keepLogin, cookieChecked } from './actions';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Article from './components/Article';
import ArticleRecent from './components/ArticleRecent';
import ArticleItem from './components/ArticleItem';
import ArticleDetail from './components/ArticleDetail';
import Contact from './components/Contact';
import ContactDetail from './components/ContactDetail';
import About from './components/About'


const cookies = new Cookies();

class App extends Component {
  componentDidMount() {
    const username = cookies.get('myPengguna');
    if(username !== undefined){
        this.props.keepLogin(username);
    } else {
      this.props.cookieChecked();
    }
}


render() {
  if(this.props.cookie){ 
    return (
      <div className="App">
      <Header />
      <div className="container-fluid myBody border bg-light" >
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/Product" component={Product}/>
        <Route path="/ProductList" component={ProductList}/>
        <Route path="/ProductDetail/:productId" component={ProductDetail}/>
        <Route path="/Article" component={Article}/>
        <Route path="/ArticleRecent" component={ArticleRecent}/>
        <Route path="/ArticleDetail/:articleId" component={ArticleDetail}/>
        <Route path="/ArticleItem" component={ArticleItem}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/ContactDetail" component={ContactDetail}/>
      </div>
      </div>
 );
}
return (  
  <div className="App">
  <Header />
  <div className="row" style={{borderRadius: "5px"}}>
    <div className="ml-auto mr-auto loader"></div>
  </div>
  </div>
  );
  }
  }



const mapStateToProps = (state) => {
  return {  cookie: state.auth.cookie,
            user: state.auth,
         }
}

export default withRouter(connect(mapStateToProps, { keepLogin, cookieChecked })(App));
