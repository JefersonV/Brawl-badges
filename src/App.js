import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BadgeNew from './Pages/BadgeNew';

function App () {
  return (
    
      <BrowserRouter>
      
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/badge/new" component = {BadgeNew} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
