import React from "react";
import Header from './Header';
import Footer from './Footer';
import Title from './Title';

export default class Layout extends React.Component {
    render() {
       return (
          <div className = "container">
              <Header/>
                <Title title = {'Photo Management'} />
              <Footer/>
          </div>
       );
    }
}