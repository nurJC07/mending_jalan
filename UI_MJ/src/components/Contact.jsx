import React, { Component } from 'react';


class Contact extends Component {
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
            <div className="col-6" >           
            <div className="col-md-6 offset-md-3" style={{padding :"20px",textAlign:"left"}}> 
            <h3>CONTACT US</h3>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-6" > 
            <div className="col-md-10 offset-md-3"  style={{padding :"0px",textAlign:"left"}}> 
                <p>Suntuk? Liburan dulu yuk! </p>
                <p>PT Erporate Adventure adalah perusahaan yang bergerak dalam bidang jasa Open Trip Management yang selalu mengerti dan mengutamakan kebutuhan konsumen dalam memberikan pelayanan perjalanan.</p>
                <p>Kami hadir untuk memberikan kemudahan kepada anda dalam memenuhi seluruh kebutuhan perjalanan anda. Pelayanan yang kami berikan seperti : tiket masuk objek wisata, s paket liburan, paket bulan madu, gathering perusahaan/keluarga, outbound training.</p>
                <p>Kami dapat memberikan pelayanan yang terbaik dengan biaya yang relative murah dan juga selain itu kami memiliki tenaga ahli dan professional yang membuat perjalanan anda menjadi lebih berkesan.</p>
            
            </div> 
            </div> 
                                          
            <div className="col-md- offset-md-1" style={{padding :"0px",display: "block"}}>
            <div className="row">
                        
            <div class="mapouter" style={{overflow:"hidden",background:"none!important",height:"300px",width:"400px"}}>
            <div class="gmap_canvas" style={{position:"relative",textAlign:"right",height:"300px",width:"400px"}}>
            <iframe width="600" height="500" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=erporate%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://www.pureblack.de/beste-wordpress-themes/"></a>
          
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          

         
          )
    }
} 

export default Contact
