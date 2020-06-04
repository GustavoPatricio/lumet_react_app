import React from 'react';
import './sobre.css';
import patricio from '../images/patricio.png';
import owsidd from '../images/owsidd.jpeg';

class Sobre extends React.Component { 

   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render() { 
      return(
         <div>
            <div>

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
      )
   }
}

export default Sobre;