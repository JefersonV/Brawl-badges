import React from 'react';
import './styles/Hero.css'
import logoBrawl from '../images/logo-hero.png';
import heroImage from '../images/hero-image.png';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
    render() {
        return(
            <React.Fragment>
                <section className="hero">
                    <article className="hero__left-content">
                        <img src={logoBrawl} alt="logo-brawl"/>
                        <h1>Crea tu Brawler</h1>
                        <p>La manera más fácil de presentar tu idea</p>
                        <Link to = "/badges" className="btn btn-primary" >Iniciar</Link>
                    </article>

                    <article className="hero__right-content">
                        <img src={heroImage} alt="brawler-image"/>
                    </article>
                </section>
            </React.Fragment>
        );
    }
}

export default Hero;
