import React from 'react';
import './navbar.css';
import logo from '../images/logo.svg';
import justlogo from '../images/justlogo.svg';
import burger from '../images/burger.png';

class Navbar extends React.Component { 

   menu = () => { 
      var menu = document.getElementById("menu");
      var blackground = document.getElementById("blackground");
      var sidebar = document.getElementById("sidebar");
      var logo = document.getElementById("logo");
   
      logo.addEventListener("click", () => {
          document.location.href = "/index.html"
      });
   
   
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
      this.menu;
   }

   render() { 
      return (
         <div>
            <div id="blackground"></div> 
        
         <nav>
            <div id="NavContentWrapper">
                <img src={burger} id="menu" />
                <div id="logo"><img src={logo}/></div>
                <div id="NavDeskItems">
                    <a href="#" className="middle-buttons"><div> Aulas </div> </a>
                    <a href="#" className="middle-buttons"> Cursos </a>
                </div>
                <div id="ContactItems">
                    <a href="#" className="right-buttons"> Quem somos </a>
                    <a href="contato.html" className="right-buttons"> Contato </a>
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