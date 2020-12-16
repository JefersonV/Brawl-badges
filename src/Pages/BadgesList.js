import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import '../components/styles/BadgesList.css';
import { Link } from 'react-router-dom';
import ListBrawler from '../components/ListBrawler';

class BadgesList extends React.Component {
    state = {
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            nameBrawler: "Tok",
            calidad: "Épico",
            clase: "Trower",
            description: "lorem ipsum lorem ist ist jasf",
            twitter: "Degranda",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            nameBrawler: "Quetzal",
            calidad: "Legendario",
            clase: "Trower",
            description: "lorem ipsum lorem ist ist jasf",
            twitter: "YoSoyJeff",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            nameBrawler: "Laika",
            calidad: "Épico",
            clase: "Trower",
            description: "lorem ipsum lorem ist ist jasf",
            twitter: "Maldeadora",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          }
        ]
      };
    render() {
        return ( 
            <React.Fragment>
                <Navbar />
                <HeroImage />
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badge/new" className="btn btn-primary">Agregar</Link>
                    </div>

                    <ListBrawler badges = {this.state.data} />
                </div>
               
            </React.Fragment>
        );
    }
}

export default BadgesList;