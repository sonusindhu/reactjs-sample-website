import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Common/Header';
import Footer from './Common/Footer';
import ScrollToTop from './Common/ScrollToTop';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Design from './Design';
import AppDevelopment from './AppDevelopment';
import WebDevelopment from './WebDevelopment';
import Portfolio from './Portfolio';
import Careers from './Careers';
import Quatation from './Quatation';
import NotFound from './NotFound';

class App extends Component {

  render() {
    return (

      <Router>
        <ScrollToTop>
        <Root>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/app-development" component={AppDevelopment}/>
              <Route path="/web-design" component={Design}/>
              <Route path="/web-development" component={WebDevelopment}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/careers" component={Careers}/>
              <Route path="/quatation" component={Quatation}/>

              <Route path="*" component={NotFound}/>
            </Switch>
          </Main>
          <Footer />
        </Root>
        </ScrollToTop>
      </Router>
      
    );
  }
}



const Root = (props)=>(
  <div {...props} />
)


const Main = (props)=>(
  <div {...props} />
)

export default App;
