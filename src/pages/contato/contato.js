import React from 'react';
import { Link } from 'react-router-dom';
import "./contato.css";
import lottie from 'lottie-web';
import contato from '../animations/contato.json';

class Contato extends React.Component { 

   contactAnimation() { 
      lottie.loadAnimation({
         container: document.getElementById("animContato"),
         renderer: 'svg',
         animationData: contato,
         loop: true
      });
   }

   componentDidMount() { 
      document.title = "Lumet: contato"
      this.contactAnimation();
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
                     <form data-aos="fade-up">
                         <div className="row">
                             <input type="text" name="Nome" id="Nome" placeholder="Seu nome" required/>
                         </div>
                         <div className="row">
                             <input type="email" name="Email" id="Email"  placeholder="Seu email" required/>
                         </div>
                         <div className="row">
                             <input type="text" name="Empresa" id="Empresa"  placeholder="Sua empresa (opcional)"/>
                         </div>
                         <div className="row">
                             <input type="tel" name="Telefone" id="Telefone"  placeholder="Telefone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                         </div>
                         <div className="row">
                             <input type="text" name="Assunto" id="Assunto"  placeholder="Assunto" required/>
                         </div>
                         <div className="row">
                             <textarea name="Mensagem" id="Mensagem" placeholder="Mensagem"></textarea>
                         </div>
                         <div className="row" style={{marginTop: '5vh'}}>
                             <input type="submit" value="Enviar"/>
                         </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Contato;