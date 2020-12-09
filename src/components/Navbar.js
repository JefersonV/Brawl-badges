import React from 'react';
import logoNav from '../images/logo-navbar.png';
import './styles/Navbar.css';
import Hero from '../components/Hero'
class Navbar extends React.Component {
    render (){
      return(
				<React.Fragment>
					<header className="header">
						<figure className="header__image-container">
							<img className="header__image" src={logoNav} alt=""/>
						</figure>
					</header>
					<Hero />
				</React.Fragment>
			); 
    }
}

export default Navbar;