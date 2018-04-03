import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Home = props => {
  return (
    <div>
      <Hello name="d2rd" />
      <h2>This is the Client-Side Mini {"\u2728"}</h2>
      <Link to="/glenn-david">Glenn-David</Link>
    </div>
  );
};

const GlennDavid = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

render() {
  return (
    <div style={styles}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
  {/* <Route path={`${props.match.path}/books`} component={Books} /> */}

    </div>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
   document.getElementById('root')
);
registerServiceWorker();
