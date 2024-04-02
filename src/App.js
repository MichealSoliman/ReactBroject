import React from 'react'
import "./App.css"
import Header from './components/common/heading/Header';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/taem/Team';


import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';




function App  ()  {
  return (
    <>
    <Router>
       <Header />
       <Switch>
       <Route path="/"  exact component={Home} />
       <Route path="/about"  component={About} />
       <Route path="/courses"  component={CourseHome} />
       <Route path="/team"  component={Team} /> 
       <Route path="/pricing"  component={Price} /> 
       <Route path="/journal"  component={Blog} /> 
       <Route path="/contact"  component={Contact} /> 



       </Switch>\
       <Footer />
    </Router>
     
    </>
  )
}

export default App;
