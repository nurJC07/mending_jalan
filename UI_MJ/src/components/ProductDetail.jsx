import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { API_URL } from '../support/config';
import { select_produk } from '../actions'


class ProductDetail extends Component {
    componentDidMount(){
        var productId = this.props.match.params.productId;
        axios.get(`${API_URL}/product/getproductdetail/${productId}`)
        .then((res) => {
            console.log(res);
            this.props.select_produk(res.data[0])
        }).catch((err) => {
            // console.log(err)
        })
    }

   
    render() {
        const { judul, image, highlight, description} = this.props.product;
       
        return(
            <div>
            <div className="row">
                <div className="col-lg-6" style={{padding:"10px",display: "block"}}>
                <img className={["card-img-top","ml-auto"]} src={`${API_URL}${image}`} alt={image} style={{marginTop: "10px", minWidth:'280px', maxHeight:"400px", maxWidth:"400px", paddingLeft:0}} />
                </div>
                <div className="col-lg-6" style={{padding :"10px",textAlign:"left"}}>
            
                <div className="row"></div>
                        <div className="alert" style={{textAlign:"left"}}>
                            <h5>{judul}</h5>
                                    <div className="row">
                                    <div className="col-md-5"></div>
                                    <p>{highlight}</p>

                                </div>
                                </div>
                            </div>
                        </div>
                   
                <div className="row" style={{margin: "25px"}}>
                    <div className="col-md-10 offset-md-1 card" style={{padding:0, textAlign:"left"}}>
                        <h4 className="card-header">ITINNERARY</h4>
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
        product: state.selectedProduk,
     
    };
}

export default connect(mapStateToProps, { select_produk, })(ProductDetail);