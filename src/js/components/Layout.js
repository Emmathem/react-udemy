import React from "react";
import "../../assets/css/main.css";
import "../../assets/css/photo.css";
import "../../assets/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    render() {
       return (
          <div>
              <Header/>
              <Footer/>
          </div>
       );
    }
}