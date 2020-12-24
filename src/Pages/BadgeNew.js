import React from 'react';
import Badge from '../components/Badge';
import Formulario from '../components/Formulario';
import '../components/styles/Formulario.css';
import HeroImage from '../components/HeroImage';
import api from '../api';
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: false, erorr: null})    

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
        } catch (error) {
            this.setState({ loading: false, erorr: error})
        }
}
        
    render() {
        return (
            <React.Fragment>
                <HeroImage />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge nameBrawler = {this.state.form.nameBrawler} 
                            quality = {this.state.form.quality }
                            class = {this.state.form.class}
                            description = {this.state.form.description}
                            twitter = {this.state.form.twitter} />
                        </div>
                        <div className="col-6">
                            <Formulario onChange = { this.handleChange } 
                            onSubmit = { this.handleSubmit }
                            formValues = {this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;