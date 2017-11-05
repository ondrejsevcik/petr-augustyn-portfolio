import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="row align-items-center">
          <div className="col-6 justify-content-start">
            <h1 className="header__title">
              Petr Augustyn
            </h1>
            <h2 className="header__subtitle">
              UX, Product and Interaction designer
            </h2>
          </div>
          <nav className="col-6 justify-content-end">
            <a href="/my-designs" className="nav__link">
              My designs
            </a>
            <a href="/contact" className="nav__link">
              Let's talk
            </a>
            <a href="/published-on-medium" className="nav__link">
              Published on Medium
            </a>
          </nav>
        </header>
        <section 
          className="row hero-banner"
        >
          <div className="col-12 hero-banner__wrapper">
            <img 
              className="hero-banner__img"
              src="http://petraugustin.com/wp-content/uploads/2017/02/cropped-st3-1.png" 
            />
            <div className="hero-banner__titles">
              <h1 className="hero-banner__title">
                My name is Petr Augustyn<span className="hero-banner__dot">.</span>
              </h1>
              <h2>I design ...</h2>
            </div>
          </div>
        </section>
        <main className="row">
          <article className="col-6">
            <a href="/" className="article__link">
              <img
                className="article__image"
                src="http://petraugustin.com/wp-content/uploads/2017/10/final5.png"
              />
              <h1>Weather &amp; fuel aircraft app</h1>
            </a>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
