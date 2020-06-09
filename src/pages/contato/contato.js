import React from 'react';
import { Link } from 'react-router-dom';
import "./contato.css";
import lottie from 'lottie-web';
import contato from '../animations/contato.json';
import Form from './form';

class Contato extends React.Component { 

   contactAnimation() { //Function that loads all the animation on the Component
      lottie.loadAnimation({
         container: document.getElementById("animContato"),
         renderer: 'svg',
         animationData: contato,
         loop: true
      });
   };

   componentDidMount() { // Set up basic Component stuf (eg Title, ScrollPosition, trigger animations )
      document.title = "Lumet: contato";
      this.contactAnimation();
      window.scrollTo(0, 0);
   }

   render () { 
      return (
         <div className="container-fluid" id="contatoWrapper"> 
            <div className="row h100" id="FormWrapper">
               <div className="col-12 justify-content-center">
                  <div className="col-sm-12 col-md-4" style={{margin: 'auto'}}>
                     <div className="row">
                         <div id="animContato" data-aos="fade-up"></div>
                     </div>
                     <Form />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Contato;