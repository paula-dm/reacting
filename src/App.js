import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Text from './Text'
import Footer from './Footer';
import Alert from './Alert';
import Count from './Count';
import Colors from './Colors';


class App extends Component{



  render() {
    return (
  <div class = "App">
        
        <Header
          subtitle="The World of creation is here."
          title="Yo Imma Dragon Master and I'm new here."
        />
        <Text />
        <Colors />
        <Alert />
        <Count />
        <Footer />
      </div>
    )
  }
  
};


export default App;
