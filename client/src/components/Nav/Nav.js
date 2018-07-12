import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      You Goal : Rotten Tomatoes for FIFA
    </a>
    <div>
      <button className="navbar-toggler navbar-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon navbar-right"></span>
      </button>
      <ul className="nav navbar-nav navbar-right">
        <li className="active navbar-right"><a href="#">Home</a></li>
      </ul>
     
      <form className="navbar-form navbar-right" href="/login">
        <div className="form-group navbar-right">
          <input type="text" className="form-control navbar-right" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default navbar-right">Submit</button>
      </form>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">
            <span className="glyphicon glyphicon-user navbar-right"></span> Sign Up
		      			</a>
        </li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in navbar-right"></span> Login</a></li>
      </ul>
    </div>
    <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
            </li>
        </ul>
  </nav>
);

export default Nav;
