import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { API_URL } from '../support/config';
import ArticleItem from './ArticleItem.jsx';

class Article extends Component {
    state = { listArticle : [] }
    
    componentDidMount() {
        axios.get(`${API_URL}/article/getarticle`
        ).then((res) => {
            this.setState({listArticle: res.data});         
        }).catch((err) => {
            console.log(err);
        })
    }

    renderListArticle = () => {
        var listJSX = this.state.listArticle.map((item) => {   
            if(this.props.article.articleId === 0) {
                return(
                    <ArticleItem article={item}/> 
               )
            }
               return <Redirect to = {`/ArticleDetail/${this.props.article.articleId}`}/> 
        })
        return listJSX;
    }
    render() {
        return(
            <div>
                 <div className="my-4">
                 <div className="row" style={{margin:"10px"}}>
                     {this.renderListArticle()}
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        article: state.selectedArticle
    };
}

export default connect(mapStateToProps)(Article);

