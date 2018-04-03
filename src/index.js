import React from 'react';
import { render } from "react-dom";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Router } from "react-router-dom";

//My routes
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Home from "./src/components/Home";
import Index from "./src/components/Index";


// import ReactDOM from 'react-dom';
// import './index.css';
// 
// import Hello from "./Hello";

// import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Router } from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const home = props => {
  return (
    <div>
      {/* <Hello name="d2rd" /> */}
      <h2>This is the Client-Side Mini {"\u2728"}</h2>
      <Link to="/glenn-david">Glenn-David</Link>
    </div>
  );
};

const GlennDavid = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/glenn-david/daniel">Last Name</Link>
      Glenn-David
      <Route path="/glenn-david/daniel" component={Daniel} />
    </div>
  );
};

const Daniel = () => {
  return <div>Daniel</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    {/* <Route path={`${props.match.path}/books`} component={Books} /> */}
      </div>
    );
  }
}


render(
  <Router>
    <App />
  </Router>,
   document.getElementById('root')
);
// registerServiceWorker();
