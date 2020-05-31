import React from 'react';
import './navbar.css';
import logo from '../images/logo.svg';
import justlogo from '../images/justlogo.svg';
import burger from '../images/burger.png';
import { Link } from 'react-router-dom';

class Navbar extends React.Component { 

   menu = () => { 
      var menu = document.getElementById("menu");
      var blackground = document.getElementById("blackground");
      var sidebar = document.getElementById("sidebar");
   
      blackground.addEventListener("click", () => {
          sidebar.classList.toggle("menuslideoff");
          sidebar.classList.toggle("menuslideon");
          blackground.style.display = "none";
      });
   
      menu.addEventListener("click", () => { 
          blackground.style.display = "block";
          sidebar.classList.toggle("menuslideoff");
          sidebar.classList.toggle("menuslideon");
      });
   }

   componentDidMount() { 
      this.menu();
   }

   render() { 
      return (
         <div>
            <div id="blackground"></div> 
        
         <nav>
            <div id="NavContentWrapper">
                <img src={burger} id="menu" />
                <div id="logo"><Link to="/"><img src={logo}/></Link></div>
                <div id="NavDeskItems">
                    <Link to="/aulas" className="middle-buttons" style={{ marginRight: '2vw' }}><div> Aulas </div> </Link>
                    <Link to="/cursos" className="middle-buttons"> Cursos </Link>
                </div>
                <div id="ContactItems">
                    <Link to="/sobre" className="right-buttons"> Quem somos </Link>
                    <Link to="/contato" className="right-buttons"  style={{marginLeft: '1vw'}}> Contato </Link>
                </div>
            </div>
         </nav>
         <div id="sidebar" className="menuslideoff">
            <img src={justlogo} />
            <div id="sideItems1">
                <a href="#"> Aulas</a>
                <a href="#"> Cursos</a>
            </div>
            <div id="sideItems2">
                <a href="#"> Quem somos</a>
                <a href="contato.html"> Contato</a>
            </div>
         </div>
         </div>
      )
   }
}




export default Navbar;