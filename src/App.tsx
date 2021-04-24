import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Locations from './pages/Locations/Locations';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/locations" />
        </Route>
        <Route path="/locations/:locationId?">
          <Locations />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
