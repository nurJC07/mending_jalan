import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select_article } from '../actions';
import { API_URL } from '../support/config';

class ArticleItem extends Component {
    
onBtnClick = () => {
    this.props.select_article(this.props.article);
}

render(){
    const {judul, description, image} = this.props.article;
    var sumber = `${API_URL}/${image}`;
       
return (
    <div className="col-lg-3 col-md-4 mb-4" >      
        <div className="card-body" style={{height:"150px", overflow:"hidden"}}>
            <img className={["img-fluid","ml-auto"]} src={sumber} width="200px" height="100px" alt={judul} />                    
        </div>
        <div className="card-footer" style={{height:"200px", overflow:"hidden"}}>
            <div className="text-wrap" style={{height:"40px", overflow:"hidden"}}>
                <p className="card-title text-uppercase font-weight-bold" style={{fontSize:12}}>{judul}</p>
            </div>                            
            <p className="font-weight-lighter" style={{fontSize:12, margin:0}}>{description}</p> 
            </div>
            <div className="card-body" style={{height:"200px", overflow:"hidden"}}>
        <input type="button" className="btn btn-success" value="Read More" onClick={this.onBtnClick} />
    </div>
    </div>
    );
    }
    }

export default connect(null, { select_article })(ArticleItem);
