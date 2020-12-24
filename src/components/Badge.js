import React from 'react';
import brawlerImage from '../images/brawler-example.png';
import './styles/Badge.css';
import Gravatar from './Gravatar';
class Badge extends React.Component {
	render() {
		// const {
		// 	name = 'Max',
		// 	calidad = 'Legendario',
		// 	clase = 'Trower',
		// 	twitter = '@JefersonDev',
		// 	description = 'Max es el brawler más rápido del universo brawl stars, es capaz de transmitirle la velocidad a sus compañeros del team.'
		// } = this.props;
		return (
		
				<React.Fragment>
					<article className="badge__container">
						<div className="badge__name">
							<h1> <span className="badge__spaceName">_</span>{this.props.nameBrawler || '-'}</h1>
						</div>
						<div className="badge__image-brawler">
								<div className="badge__container-brawler">
									<Gravatar className="badge__image-container" 
									email = { this.props.twitter }
									alt = "avatar"/>
								<span className="badge__info">
									<h3><span className="badge__label">Calidad <br/> </span> <span className="badge__prop"> {this.props.quality || '- '} </span></h3>
									<h3> <span className="badge__label"> Clase <br/></span> <span className="badge__prop"> {this.props.class || '-'} </span></h3>
								</span>
							</div>

							<div className="badge__description-container">
								
								<span className="badge__description">
									<p> {this.props.description || 'Descripción del brawler'} </p>
									
								</span>
								<h3> <span className="badge__label--twitter"> Twitter del autor:</span> <span className="badge__label--autor"> {this.props.twitter || '@example'} </span></h3>
							</div>
						</div>
					</article>
				</React.Fragment>
		);
	}
}

export default Badge;