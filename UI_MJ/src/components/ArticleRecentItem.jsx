import React, { Component } from 'react';
import { connect } from 'react-redux'
import { API_URL } from '../support/config';
import { select_article} from '../actions'

class ArticleRecentItem extends Component {
     
    onItemClick = () => {
        this.props.select_article(this.props.article);
    }
    
    render() {
        const {judul, image, description} = this.props.article;
    

        return(
            <div>  
            <div className="row " >
            <div className="col-6" style={{display: "block"}}>
            <img className="card-body" src={`${API_URL}${image}`}  alt={judul} 
            style={{marginTop: "10px", Width:"300px", height:"180px", paddingLeft:0}} />
            </div>
            <div className="col-md-6 ml-6">
            <div className="alert" style={{textAlign:"left"}}>
            <h5>{judul}</h5>
            <div className="row">
            <div className="card-body">
            <p>{description}</p>  
            </div>
            <div className="col-md-6 ml-6">
            <input type="button" className="btn btn-success" value="Read More" onClick={this.onItemClick} />
            </div>
            </div>
            </div>
            </div>      
            </div>
            </div> 
        )
    }
}
    
    export default connect(null, { select_article })(ArticleRecentItem);