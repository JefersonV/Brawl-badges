import React, { Component } from 'react';
import HeroImage from '../components/HeroImage';
import '../components/styles/BadgesList.css';
import { Link } from 'react-router-dom';
import ListBrawler from '../components/ListBrawler';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgesList extends React.Component {

      state = {
        loading: true,
        error: null,
        data: undefined,
      }; 

      componentDidMount () {
        this.fetchData();
      }

      fetchData = async () => {
        this.setState({ loading: true, error: null })
      
      try {
        const data = await api.badges.list();
        this.setState({ loading: false, data: data });
      } catch(error) {
        this.setState({ loading: false, error: error })
      }
    };
    render() {
      if(this.state.loading === true){
        return <PageLoading />
      }
      if(this.state.error){
        return `Error: ${this.state.error.message}`
      }
        return ( 
            <React.Fragment>
                
                <HeroImage />
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badge/new" className="btn btn-primary">Agregar</Link>
                    </div>
                    {/* Los props :D */}
                    <ListBrawler badges = {this.state.data} />
                </div>
               
            </React.Fragment>
        );
    }
}

export default BadgesList;