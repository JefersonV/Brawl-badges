import React from 'react';
import Badge from '../components/Badge';
import Formulario from '../components/Formulario';
import Navbar from '../components/Navbar';
import '../components/styles/Formulario.css';
import HeroImage from '../components/HeroImage';
class BadgeNew extends React.Component {
    state = {
        form: {
            nameBrawler: '',
            quality: '',
            class: '',
            description: '',
            twitter: '',
         }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
        
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <HeroImage />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge NameBrawler = {this.state.form.nameBrawler} 
                            quality = {this.state.form.quality }
                            class = {this.state.form.class}
                            description = {this.state.form.description}
                            twitter = {this.state.form.twitter} />
                        </div>
                        <div className="col-6">
                            <Formulario onChange = { this.handleChange } 
                            formValues = {this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;