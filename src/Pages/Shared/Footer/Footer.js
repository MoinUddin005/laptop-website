import React from 'react';

const logo = 'https://i.ibb.co/9ZBBNW9/istockphoto-1130947395-612x612.png';
const Footer = () => {
    return (
        <footer
            className="text-center text-lg-start text-dark  "
            style={{"background-color": "#Cfeef9"}}
            
            >
     
      <section
               className="d-flex justify-content-between p-4"
               style={{"background-color": "#Cfeef9"}}
               
               >
      
        
       
  
       
        <div>
          <a href="https://www.facebook.com/moinuddin.niloy/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.facebook.com/moinuddin.niloy/" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com/" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/moin_uddin_minhaj321/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/moin-uddin-b83b30215/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
  
      </section>
      
      <section className="">
        <div className="container text-center text-md-start mt-5">
        
          <div className="row mt-3">
           
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h6 className="text-uppercase fw-bold"><i class="fas fa-laptop-code"></i> Laptop World
</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width": "300px","background-color": "#263e48", "height": "2px"}}
              ></hr>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  // style={{"background-color": "#6351ce"}}
  
                  />
              <p>
                thank You 
              </p>
            </div>
          
           
            
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width": "60px","background-color": "#7c4dff", "height": "2px"}}
              ></hr>
              <p><i className="fas fa-home mr-3"></i> chittagong</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
           
          </div>
        
        </div>
      </section>
     
      
      
    </footer>
    );
};

export default Footer;