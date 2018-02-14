import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; // new

function About() {
  return (
    <div>
      <h1>About component</h1>
      <p id="paragraph">This is the about component</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home component</h1>
      <p id="paragraph">This is the home component</p>
    </div>
  );
}

// changed this
ReactDOM.render(
<Router>
  <div>
    <ul>
      <li>
        <NavLink to="/" activeClassName="navlink--active" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="navlink--active">About</NavLink>
      </li>
      {/* <li>
        <link to="/products">Products</link>
      </li> */}
    </ul>
    <Route path='/' component={Home} exact />
    <Route path="/about" component={About} />
    {/* <Route path="/products" component={Products} /> */}
  </div>
</Router>,
document.getElementById('root')
);
// registerServiceWorker();
//http://localhost:3000 /
//http://localhost:3000 /about

