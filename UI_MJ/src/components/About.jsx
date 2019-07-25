import React, { Component } from 'react';
import gambar  from '../support/img/TLOte.jpg'


class About extends Component {
    render (){
        return (
            <div id="video" className="text-center wow fadeInUp">
            <div className="container">
               
            </div>
            <div className="my-4">
            <div className="row justify-content-md-center">
                    <div className="row">
                        <video width={1000} height={376} controls>
                            <source src="video/Ote UK NYE 2019.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
               
                <div className="row">
                <div className="col-lg-6" style={{padding:"10px",display: "block"}}>
                <img className={["card-img-top","ml-auto"]} src={gambar} alt={gambar} style={{marginTop: "10px", minWidth:'280px', maxHeight:"400px", maxWidth:"400px", paddingLeft:0}} />
                </div>
                <div className="col-lg-6" style={{padding :"10px",textAlign:"left"}}>
                <div className="row">
                <h2>About Us</h2>
                </div>
                <div className="row">
                    <p>Suntuk? Liburan dulu yuk! </p>
                   <p> PT Mending Jalan adalah perusahaan yang bergerak dalam bidang jasa Open Trip Management yang selalu mengerti dan mengutamakan kebutuhan konsumen dalam memberikan pelayanan perjalanan.
                   /n Kami hadir untuk memberikan kemudahan kepada anda dalam memenuhi seluruh kebutuhan perjalanan anda. Pelayanan yang kami berikan seperti : tiket masuk objek wisata, s paket liburan, paket bulan madu, gathering perusahaan/keluarga, outbound training.
                    /n Kami dapat memberikan pelayanan yang terbaik dengan biaya yang relative murah dan juga selain itu kami memiliki tenaga ahli dan professional yang membuat perjalanan anda menjadi lebih berkesan.
</p>
</div>
                  

            </div>
            </div>
            </div>
        </div>
         
          )
    }
} 

export default About
