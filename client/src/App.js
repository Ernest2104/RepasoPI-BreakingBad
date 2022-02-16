import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.jsx';
import LandingPage from './components/LandingPage.jsx'
import CharacterCreate from './components/CharacterCreate.jsx'
import Detail from './components/Detail.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/character' component={CharacterCreate} />
        <Route path='/home/:id' component={Detail} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
