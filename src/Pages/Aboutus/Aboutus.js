import React from 'react';
const img=`https://i.ibb.co/zX48y17/download.jpg`;

const Aboutus = () => {
    return (
        
        
        <div>
            <h1><b>ABOUT US</b></h1>
            
            <div className=" text-center d-flex mt-5 pt-5 text-dark">
                <div className="container  my-5 w-50">
                    
                    <p>I love travelling and I love languages, so imagine my excitement when I came across a treasure trove of travel words and wanderlust synonyms that describe how we feel before, during, and after we travel. Just like a photo can’t fully capture what it feels like to stand on the edge of a fjord, neither can ‘wanderlust’ fully express how we feel when we crave our next adventure. These travel words are literary gems which have been gathered from languages around the world. From Japanese to Swedish, Latin to Greek, travel brochures of the future will be peppered with travel words like of resfeber, livsnjutare, and coddiwomple.
                    
                    
                    </p>
                   
                </div>
                <div className="container my-5 w-50">
                <img className="img-fluid" src={img} alt=""/>
                </div>
           </div>
        </div>

        

);
};


export default Aboutus;