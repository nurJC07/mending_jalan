import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { API_URL } from '../support/config';
import ArticleRecentItem from './ArticleRecentItem.jsx';
import { select_article} from '../actions'

class ArticleRecent extends Component {
    state = { listArticle : []  };   

componentDidMount() {
    axios.get(`${API_URL}/article/articlerecent`
    ).then((res) => {
        this.setState({listArticle: res.data});   
    }).catch((err) => {
        console.log(err);
    })
}
    
renderListArticle = () => {
    var listJSX = this.state.listArticle.map((item) => {           
        if(this.props.article.articleId !== 0){
            return <Redirect to={`/ArticleDetail/${this.props.article.articleId}`} />
        }
        return(
             <ArticleRecentItem article={item} key={item.articleId}/> 
        );
    })
    return listJSX;
}
render() {
    return(
        <div>
        <div className="section-title text-center">
        <h3>RECENT ARTICLE</h3>
        </div>
            <div className="row">
                {this.renderListArticle()}
            </div>
        </div>
    );
}
}
    

const mapStateToProps = (state) => {
    return { 
        article: state.selectedArticle,
        
    };
}

export default connect(mapStateToProps, { select_article })(ArticleRecent);