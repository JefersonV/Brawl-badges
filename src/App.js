import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BadgeNew from './Pages/BadgeNew';
import BadgesList from './Pages/BadgesList';
import Layout from './components/Layout';
import Mi404 from './components/Mi404';
import { Redirect } from "react-router-dom";

function App () {
  return (
    
      <BrowserRouter>
      
          <Switch>
            <Layout>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/badge/new" component = {BadgeNew} />
              <Route exact path = "/badges" component = {BadgesList} />
              <Route path="/404" component={Mi404} />
              <Redirect from="*" to="/404" />
            </Layout>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
