import React from 'react';
import Badge from '../components/Badge';
import Formulario from '../components/Formulario';
import Navbar from '../components/Navbar';
import '../components/styles/Formulario.css';

class BadgeNew extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge />
                        </div>
                        <div className="col-6">
                            <Formulario/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;