import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <Hero />
            </React.Fragment>
        );
    }
}
//https://www.gravatar.com/avatar?d=identicon
export default Home;