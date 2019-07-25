import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { API_URL } from '../support/config';
import { recent_article } from '../actions'


class ArticleDetail extends Component {
    componentDidMount(){
        var articleId = this.props.match.params.articleId;

        axios.get(`${API_URL}/article/getarticledetail/${articleId}`)
        .then((res) => {
            console.log(res);
            this.props.select_article(this.props.article)
        }).catch((err) => {
        })
    }

   
    render() {
        const { judul, image, description} = this.props.article;

        return(
            <div>
            <div className="row">
                <div className="col-lg-6" style={{padding:"10px",display: "block"}}>
                <img className="card-img-top" src={`${API_URL}${image}`}   alt={image} style={{marginTop: "10px", minWidth:'280px', maxHeight:"400px", maxWidth:"400px", paddingLeft:0}} />
                </div>
                <div className="col-lg-6" style={{padding :"10px",textAlign:"left"}}>
            
                <div className="row"></div>
                        <div className="alert" style={{textAlign:"left"}}>
                            <h5>{judul}</h5>
                                    <div className="row">
                                    <div className="col-md-5"></div>

                                </div>
                                </div>
                            </div>
                        </div>
                   
                <div className="row" style={{margin: "25px"}}>
                    <div className="col-md-10 offset-md-1 card" style={{padding:0, textAlign:"left"}}>
                        <h4 className="card-header">DESCRIPTION</h4>
                        <div className="card-body">
                            <p>{description}</p>
                        </div>
                    </div>
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

export default connect(mapStateToProps, { recent_article })(ArticleDetail);