import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select_produk } from '../actions';
import { API_URL } from '../support/config';

class ProductItemList extends Component {
    
    onItemClick = () => {
        this.props.select_produk(this.props.product);
    }

    render(){
        const {judul, highlight, image} = this.props.product;

        return (
          
            <div className="row">
             <div className="row bg-light" style={{padding:"20px"}}>
                    <div className="col-lg-6" style={{display: "block"}}>
                        <img className="card-img-top" src={`${API_URL}${image}`} alt={judul} style={{marginTop: "10px", width:'400px',  paddingLeft:10}} />        
               </div>
                <div className="col-lg-6" style={{padding :"10px",textAlign:"left"}}>
                <div className="row">
                <h2>{judul}</h2>
                </div>
                <div className="row">
                 <h4 style={{ color: '#ea7f1c', fontSize: "16px" }}>
                {highlight}
                </h4>
               </div>
               <div className="row">
               <input type="button" className="btn btn-success" value="See Product" onClick={this.onItemClick} />
                </div>
                </div>
                </div>
                </div>
                
            
        );
    }
}

export default connect(null, { select_produk })(ProductItemList);
