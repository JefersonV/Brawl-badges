import React from 'react'
import Image404 from '../images/mi404.jpg';
import './styles/error.css';

class Mi404 extends React.Component {

    render () {
        return (
            <React.Fragment>
                <figure className="Error__container">
                    <img src = {Image404} alt="error 404"/>
                </figure>
            </React.Fragment>
        );
    }
}

export default Mi404;