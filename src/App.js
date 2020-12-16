import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BadgeNew from './Pages/BadgeNew';
import BadgesList from './Pages/BadgesList';

function App () {
  return (
    
      <BrowserRouter>
      
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/badge/new" component = {BadgeNew} />
            <Route exact path = "/badges" component = {BadgesList} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
