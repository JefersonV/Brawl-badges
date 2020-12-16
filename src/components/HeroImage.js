import React from 'react';
import '../components/styles/HeroImage.css';
import portada from '../images/portada.jpeg';

class HeroImage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="img-fluid">
                    <img src={portada} alt=""/>
                </div>
            </React.Fragment>
        );
    }
}

export default HeroImage;