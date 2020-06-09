import React from 'react';
import "./cursos.css";
import tentando from '../animations/tentando.json';
import lottie from 'lottie-web';

class Cursos extends React.Component { 

   animations = () => { 
      
      lottie.loadAnimation({
         container: document.getElementById("anim_bolinhas"),
         renderer: 'svg',
         animationData: tentando,
         loop: true,
         autoplay: true
         // rendererSettings : { 
         //    preserveAspectRatio: 'none'
         // }
      });
   }

   componentDidMount() {
      document.title = "Lumet: Cursos";
      this.animations();
      window.scrollTo(0, 0);
   }

   render () { 

      return (
         <div id="Wrapper" style={{backgroundColor: '#33343F'}}>
            <div id="anim_bolinhas">

            </div>
         </div>
      )
   }
}



export default Cursos;