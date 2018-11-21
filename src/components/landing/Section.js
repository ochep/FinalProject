import React from 'react';
import reactjs from '../../img/reactjs.jpg';
import createReactApp from '../../img/createReactApp.jpg';
import reactrouter4 from '../../img/reactrouter4.jpg';
import bootstrap4 from '../../img/bootstrap4.jpg';



const Section = () => {
    return (
        <div>
        <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>About</h2>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
            </div>
            <div className="col-md-5 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <h2></h2>
      <section id="portfolio" className="portfolio bg-light pb-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Portfolio</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/1.png" className="img-thumbnail" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/2.png" className="img-thumbnail" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/3.png" className="img-thumbnail" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/4.png" className="img-thumbnail" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/5.png" className="img-thumbnail" />
            </a>
          </div>
          <div className="col-sm-4">
            <a href>
              <img src="http://ticket.citrarayawaterworld.com/img/thumbs/6.png" className="img-thumbnail" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="contact mb-5">
        <div className="container">
          <div className="row pt-4 mb-4">
            <div className="col text-center">
              <h2>Contact Me</h2>
              {/*<hr>*/}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card text-white bg-warning mb-3 text-center">
                <div className="card-body">
                  <h5 className="card-title">Contact Me</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <ul className="list-group">
                <li className="list-group-item">My Office</li>
                <li className="list-group-item">Management Office</li>
                <li className="list-group-item">Jl. Ecopolis Avenue Blok VE. 07 no. 07-09</li>
                <li className="list-group-item">CitraRaya - Tangerang 15710</li>
                <li className="list-group-item">+62 21 2259 6999 (ext 359)</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="name" className="form-control" id="name" />
                  {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="address" className="form-control" id="address" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="phone" className="form-control" id="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Message:</label>
                  <textarea className="form-control" id="message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-warning">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};



export default Section;
