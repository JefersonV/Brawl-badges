import React from 'react';
import logoNav from '../images/logo-navbar.png';
import './styles/Navbar.css';
class Navbar extends React.Component {
    render (){
      return(
				<React.Fragment>
					<header className="header">
						<figure className="header__image-container">
							<img className="header__image" src={logoNav} alt=""/>
						</figure>
					</header>
				</React.Fragment>
			); 
    }
}

export default Navbar;