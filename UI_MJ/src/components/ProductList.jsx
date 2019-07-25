import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { API_URL } from '../support/config';
import ProductItemList from './ProductItemList.jsx';

class ProductList extends Component {
    state = { listProduk : [] };

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
           
            return(
                 <ProductItemList product={item} key={item.productId}/> 
            );
        })
        return listJSX;
    }
    render() {
        if(this.props.product.productId !== 0){
            return <Redirect to = {`/ProductDetail/${this.props.product.productId}`}/>
        }
        return(
            <div>
                <div className="col">
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

export default connect(mapStateToProps)(ProductList);