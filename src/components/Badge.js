import React from 'react';
import brawlerImage from '../images/brawler-example.png';
import './styles/Badge.css';

class Badge extends React.Component {
	render() {
		const {
			name = 'Max',
			calidad = 'Legendario',
			clase = 'Trower',
			twitter = '@JefersonDev',
			description = 'Max es el brawler más rápido del universo brawl stars, es capaz de transmitirle la velocidad a sus compañeros del team.'
		} = this.props;
		return (
		
				<React.Fragment>
					<article className="badge__container">
						<div className="badge__name">
							<h1>{name}</h1>
						</div>
						<div className="badge__image-brawler">
								<div className="badge__container-brawler">
									<img className="badge__image-container" src={brawlerImage} alt="foto del brawler"/>
								<span className="badge__info">
									<h3><span className="badge__label">Calidad <br/> </span> <span className="badge__prop"> {calidad} </span></h3>
									<h3> <span className="badge__label"> Clase <br/></span> <span className="badge__prop"> {clase} </span></h3>
								</span>
							</div>

							<div className="badge__description-container">
								
								<span className="badge__description">
									<p> {description} </p>
									
								</span>
								<h3> <span className="badge__label--twitter"> Twitter del autor:</span> <span className="badge__label--autor"> {twitter} </span></h3>
							</div>
						</div>
					</article>
				</React.Fragment>
		);
	}
}

export default Badge;