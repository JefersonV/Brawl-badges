import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BadgeNew from './Pages/BadgeNew';
import BadgesList from './Pages/BadgesList';
import Layout from './components/Layout';

function App () {
  return (
    
      <BrowserRouter>
      
          <Switch>
            <Layout>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/badge/new" component = {BadgeNew} />
              <Route exact path = "/badges" component = {BadgesList} />
            </Layout>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
