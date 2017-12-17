import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Github from './Github';




// My Routes
class Routes extends Component {

  render() {
    return (
	<Router>
		<Switch>

        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Topics" component={Topics} />
        <Route path="/Facebook" component={Facebook} />

        <Route path="/Twitter" component={Twitter} />

        <Route path="/Github" component={Github} />


		</Switch>
	</Router>
    );
  }
}
export default Routes;
