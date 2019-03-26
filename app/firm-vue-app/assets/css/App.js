import React, { Component } from 'react';
import logo from './images/logo.png';
import timeline_map from './images/logo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <nav id="nav" className="navbar navbar-fixed-top" data-spy="affix">
              <div className="">
                  <div className="navbar-header">
                <a href="#" className="navbar-brand">
                  <img src={logo} className="App-logo d-inline-block align-top" alt="logo" />
                </a>
                <a className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <i className="fa fa-bars"></i>
                </a>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>
                  <ul className="nav pull-right navbar-nav">
                    <li>
                     <a hrefName="#">Link</a>
                    </li>
                  </ul>
                </div>        
              </div>
            </nav>
            <section className="App-slide1" id="slide1">
              <div className="home-slide container-fluid">
                  <div className="row">
                    <div className="col-lg-6" id="left-pane">
                      left half
                    </div>
                    <div className="col-lg-6" id="right-pane">
                      right half
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <
                    </div>
                  </div>
              </div>
            </section>    
      </div>
    );
  }
}

export default App;
