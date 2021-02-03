import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Explore from './components/Explore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </ Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
