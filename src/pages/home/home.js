import React from 'react';
import "./home.css";
import sec1 from '../animations/sec1.json';
import sec2 from '../animations/sec2.json';
import sec3 from '../animations/sec3.json';
import lottie from 'lottie-web';

class Home extends React.Component { 

   animations = () => { 
      lottie.loadAnimation({
         container: document.getElementById("anim1"),
         renderer: 'svg',
         animationData: sec1,
         loop: true
      });

      lottie.loadAnimation({
         container: document.getElementById("anim2"),
         renderer: 'svg',
         animationData: sec2,
         loop: true
      });

      lottie.loadAnimation({
         container: document.getElementById("anim3"),
         renderer: 'svg',
         animationData: sec3,
         loop: true
      });
   }

   componentDidMount() { 
      this.animations();
   }

   render () { 

      return (
         <div>
            <div className="container-fluid h100" id="section1Wrapper">
                  <div className="row justify-content-center h-100"> 
                     <div className="col-12 col-md-12 col-lg-5 col-xl-4 align-self-center" 
                     data-aos="fade-right" 
                     data-aos-delay="400"
                     data-aos-duration="500">
                        <h1>
                           Crie <span>vídeos</span> e dê vida <br />
                           à suas ideias.
                        </h1>
                     </div>
                     <div className="col-12 col-md-8 col-lg-7 col-xl-6 align-self-end" id="anim1Wrapper">
                        <div id="anim1"  data-aos="fade-left"></div>
                     </div>
                     
                  </div>
            </div>
       
            <div className="container-fluid h100" id="section2Wrapper">
                  <div className="row justify-content-center h-100"> 
                     <div className="col-md-7 col-lg-7 col-xl-6 align-self-end" id="anim2Wrapper">
                        <div id="anim2" data-aos="fade-right"></div>
                     </div>
                     <div className="col-md-12 col-lg-5 col-xl-4 align-self-center order-first order-lg-last"
                     data-aos="fade-left" 
                     data-aos-delay="400"
                     data-aos-duration="500">
                        <h1>Com a <span>Lumet</span> seu aprendizado <br /> 
                              é <span>100% online</span> e em <span>qualquer <br />
                              lugar </span> que você quiser!
                        </h1>
                     </div>
                     
                  </div>
            </div>


            <div className="container-fluid h100" id="section3Wrapper">
                  <div className="row justify-content-center h-100" > 
                     <div className="col-md-10 col-lg-5 col-xl-4"
                     data-aos="fade-right" 
                     data-aos-delay="400"
                     data-aos-duration="500">
                        <div id="buttonsWrapper">
                              <h1>
                                 Não perca <span> tempo! </span> <br/>
                                 Comece a <span>aprender agora!</span>
                              </h1>

                              <a href="#" className="lumetButton" style={{marginTop: '10vh'}}> 
                                 Tutoriais Gratuitos
                              </a>
                              <a href="#" className="lumetButton" style={{marginTop: '5vh'}}> 
                                 Curso Completo
                              </a>
                        </div>
                     </div>
                     <div className="container-sm-fluid col-md-6 col-lg-7 col-xl-6 align-self-end" id="anim3Wrapper" style={{overflow: 'hidden'}}>
                        <div id="anim3" data-aos="fade-left"></div>
                     </div>
                  </div>
            </div>  
         </div>
      )
   }
}



export default Home;