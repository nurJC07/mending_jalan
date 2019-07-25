import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select_produk } from '../actions';
import { API_URL } from '../support/config';

class ProductItem extends Component {
    
    onItemClick = () => {
        this.props.select_produk(this.props.product);
    }

    render(){
        const {judul, highlight, image} = this.props.product;
        var sumber = `${API_URL}/${image}`;

        return (
            <div className="col-lg-3 col-md-4 mb-4" >
                <div className="card h-80">   
                <div className="card-body" style={{height:"140px", overflow:"hidden"}}>
                <img className={["img-fluid","ml-auto"]} src={sumber} width="160px" height="100px" alt={judul} />                    
                </div>
                <div className="card-footer" style={{height:"200px", overflow:"hidden"}}>
                    <div className="text-wrap" style={{height:"40px", overflow:"hidden"}}>
                        <p className="card-title text-uppercase font-weight-bold" style={{fontSize:12}}>{judul}</p>
                    </div>                            
                    <p className="font-weight-lighter" style={{fontSize:12, margin:0, textAlign:"justify"}}>{highlight}</p> 
                    </div>
                    <div className="card-footer" style={{height:"60px", overflow:"hidden"}}>
                    <input type="button" className="btn btn-success" value="See Product" onClick={this.onItemClick} />
                    
                       
                        </div>
                    
                </div>
                
            </div>
        );
    }
}

export default connect(null, { select_produk })(ProductItem);
