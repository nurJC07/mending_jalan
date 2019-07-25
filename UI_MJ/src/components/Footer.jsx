import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
<div id="newsletter" className="newsletter text-center wow fadeInUp">
<div className="overlay padd-section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-6">
                <h4>Daftarkan alamat email Anda sekarang dan jadi yang pertama tahu tentang promo terbaru kami!</h4>
            </div>
            <div className="col-md-9 col-lg-6">
                <form className="form-inline">
                    <input type="email" className="form-control " placeholder="Email Adress" name="email" />
                    <button type="submit" className="btn btn-default"><i className="fa fa-location-arrow" />Subscribe</button>
                </form>
            </div>
        </div>
        <ul className="list-unstyled">
                <li><a href="#facebook"><i className="fa fa-facebook" /></a></li>
                <li><a href="#twitter"><i className="fa fa-twitter" /></a></li>
                <li><a href="#google"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#instagram"><i className="fa fa-instagram" /></a></li>
        </ul>
    </div>
</div>
</div>
        )}}

export default Footer;