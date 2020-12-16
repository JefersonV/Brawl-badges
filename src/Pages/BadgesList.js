import React from 'react';
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
              "https://www.gravatar.com/avatar/"
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            nameBrawler: "Quetzal",
            calidad: "Legendario",
            clase: "Trower",
            description: "lorem ipsum lorem ist ist jasf",
            twitter: "YoSoyJeff",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e97",
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