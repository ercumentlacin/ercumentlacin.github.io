import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/articles'>
          <Articles />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
