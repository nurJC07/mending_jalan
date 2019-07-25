import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { API_URL } from '../support/config';
import ProductItem from './ProductItem.jsx';

class Product extends Component {
    state = { listProduk : []  };

    componentDidMount() {
        axios.get(`${API_URL}/product/getproduct`
        ).then((res) => {
            this.setState({listProduk: res.data});        
        }).catch((err) => {
            console.log(err);
        })
    }

      renderListProduct = () => {
        var listJSX = this.state.listProduk.map((item) => {           
            if(this.props.product.productId !== 0){
                return <Redirect to={`/ProductDetail/${this.props.product.productId}`} />
            }
            return(
                 <ProductItem product={item}/> 
            );
        })
        return listJSX;
    }
    render() {
        return(
            <div>
            <div className="section-title text-center">
            <h3>BEST OFFER</h3>
            </div>
                <div className="row">
                    {this.renderListProduct()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        product: state.selectedProduk
    };
}

export default connect(mapStateToProps)(Product);