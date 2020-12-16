import React from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/logo-navbar.png';
import './styles/Navbar.css';
class Navbar extends React.Component {
    render (){
      return(
				<React.Fragment>
					<header className="header">
						<Link to ="/" className="header__image-container">
							<img className="header__image" src={logoNav} alt=""/>
						</Link>
					</header>
				</React.Fragment>
			); 
    }
}

export default Navbar;