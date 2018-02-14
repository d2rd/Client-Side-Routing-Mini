import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as router } from 'react-router-dom'; // new

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <p id="paragraph">This is the App Component</p>
      </div>
    );
}

// changed this


ReactDOM.render(
<App />, 
<router>,
  <div>
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/about">About</link>
      </li>
      <li>
        <link to="/products">Products</link>
      </li>
    </ul>
    <Route path='/' cmponent={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/products" component={Products} />
  </div>
</Router>,
document.getElementById('root')
);
// registerServiceWorker();
//http://localhost:3000 /
//http://localhost:3000 /about