import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';

const App = () => (
  <Router>
  <div>
    <ul>
      {/* SEE VIDEO FOR MISSING CODE */}
    </ul>
    <Navigation /> 

    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/products" component={Products} />
    <Route path="/greet/:first/:last" component={Greeter} />    
  </div>
  </Router>
);

function Greeter(props) {
  console.log('greeter props', props);
  return (
    <div>
      <h3>Hello {props.match.params.first} {props.match.params.last}</h3>
    </div>
  );
}
export default App;

// /friends/1

// exact makes list items only when the route matches everything exactly nested components are not shown.
