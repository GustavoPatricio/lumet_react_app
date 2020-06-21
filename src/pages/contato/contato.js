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
         <div className="container-fluid" id="contato_wrapper">
            <div id="contato_title"> Entre em contato cosnosco! </div>
            <div className="row justify-content-center h100">
               <div className="col-11" id="contato_contentWrapper">
                 
               <div id="contato_innerWrapper">
                  <Form />
                  <div id="animContato"></div>
               </div>

               </div>
            </div>
         </div>
      )
   }
}

export default Contato;