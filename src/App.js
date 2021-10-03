import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Allservices from './components/allServices/Allservices';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/Allservices'>
            <Allservices></Allservices>
          </Route>
          <Route path='/AboutUs'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/Conatct'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
