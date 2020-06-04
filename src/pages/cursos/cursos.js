import React from 'react';
import "./cursos.css";
import animBolinhas from '../animations/bolinhas_bg.json';
import lottie from 'lottie-web';

class Cursos extends React.Component { 

   animations = () => { 
      lottie.loadAnimation({
         container: document.getElementById("anim_bolinhas"),
         renderer: 'svg',
         animationData: animBolinhas,
         loop: true,
         autoplay: true,
      });
   }

   componentDidMount() {
      document.title = "Lumet: Cursos";
      this.animations();
      window.scrollTo(0, 0);
   }

   render () { 

      return (
         <div id="Wrapper" style={{backgroundColor: 'black'}}>
            <div id="anim_bolinhas" style= {{width: '20vw'}}>

            </div>
         </div>
      )
   }
}



export default Cursos;