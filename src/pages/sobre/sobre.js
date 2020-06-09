import React from 'react';
import './sobre.css';
import patricio from '../images/high.jpg';
import owsidd from '../images/owsidd.jpeg';
import background_dark from '../animations/tentando.json';
import lottie from 'lottie-web';

class Sobre extends React.Component { 

   animations = () => { 
      var animation = lottie.loadAnimation({
         container: document.getElementById("sobre_background"),
         renderer: 'svg',
         animationData: background_dark,
         loop: true,
         autoplay: true,
         rendererSettings : { 
            preserveAspectRatio: 'none'
         }
         
      });
   }

   componentDidMount() {
      window.scrollTo(0, 0);
      this.animations(); 
   }

   render() { 
      return(
         <div id="sobre_base">
            
            <div id="sobre_background"> 
            </div>
          
            <div id="sobre_content">
               <div className="sobre_sec">
                  <div id="sobre_lumet">
                     <h1>Sobre a gente</h1>
                     <p>
                        eaeaeaeoaijdfioadd <br />
                        eaeaeaeoaijdfioadd <br />
                        eaeaeaeoaijdfioadd <br />
                     </p>
                  </div>
               </div>
               <div className="sobre_sec" id="patricio">
                  <div className="sobre_pessoaWrapper">
                     <div className="sobre_pictureWrapper">
                        <img src={patricio}/>
                        <div class="sobre_nomeContainer"> Gustavo Patrício </div>
                     </div>
                     <div className="sobre_infoWrapper">
                        <div className="sobre_descricao">
                           Técnico em informática e em Desenvolvimento de sistemas. Atualmente estou abraçando grandes projetos e 
                           bla bla bla lorem ipsum do se ilakfc celofckesfks kvspomvksvsv.
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sobre_sec" id="sidnei">
                  <div className="sobre_pessoaWrapper">
                     <div className="sobre_pictureWrapper">
                        <img src={owsidd}/>
                        <div class="sobre_nomeContainer" > Sidnei Júnior </div>
                     </div>
                     <div className="sobre_infoWrapper">
                        <div className="sobre_descricao">
                           Técnico em informática e em Desenvolvimento de sistemas. Atualmente estou abraçando grandes projetos e 
                           bla bla bla lorem ipsum do se ilakfc celofckesfks kvspomvksvsv.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Sobre;