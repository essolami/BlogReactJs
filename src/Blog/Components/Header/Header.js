import React from 'react'
import './Style.css'
import oupt from '../../Images/outpout.png'

function Header(props) {
    return (
        <div>
        <nav className="navbar">
            <ul className="ul">
                <li className="il"><a className="a"  href="/">Home</a></li>
                <li className="il"><a className="a" href="#">Contact Us</a></li>
                <li className="il"><a  className="a" href="#">About Us</a></li>
                
            </ul>
            <div className="Social">
              <ul>
                <li><a className="facebook" href="#"  title="Facebook"><i className="fab fa-facebook"></i></a></li>

                <li><a className="pinterest" href="#"  title="Pinterest"><i className="fab fa-pinterest"></i></a></li>

                <li><a className="behance" href="#"  title="Behance"><i className="fab fa-behance"></i></a></li>

                <li><a className="flickr" href="#"  title="flickr"><i className="fab fa-flickr"></i></a></li>

                <li><a className="instagram" href="#"  title="instagram"><i className="fab fa-instagram"></i></a></li>

                <li><a className="twitter" href="#"  title="twitter"><i className="fab fa-twitter"></i></a></li>

                <li><a className="linkedin" href="#"  title="linkedin"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
        </nav>
      <div className="logo2">
        <img src={oupt}/>
       * Essolami Blog *
      </div>
        </div>
    )
}



export default Header

