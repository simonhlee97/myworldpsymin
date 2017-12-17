import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
// My Components and Images
import Facebook from './Facebook';
import Twitter from './Twitter';
import Spotify from './Spotify';
import Hulu from './Hulu';
import Instagram from './Instagram';
import Linkedin from './Linkedin';

import instagram from '../images/instagram.jpg';
import netflix from '../images/netflix.png';
import twitter from '../images/twitter.jpg';
import facebook from '../images/facebook.jpg';
import linked from '../images/linked.jpg';
import spotify from '../images/spotify.jpg';
import hulu from '../images/hulu.jpg';



class TheGrid extends Component {

  render() {
    return (
    	
		    <Router>
			    <Switch>
					<Route path="/Facebook" component={Facebook} />
					<Route path="/Twitter" component={Twitter} />
					<Route path="/Instagram" component={Instagram} />
					<Route path="/Hulu" component={Hulu} />
					<Route path="/Spotify" component={Spotify} />
					<Route path="/Linkedin" component={Linkedin} />
				

        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Link to="/Twitter">
                <Image 
                src={twitter} alt="twitter"
                size='medium' centered />
              </Link>
            </Grid.Column>
            <Grid.Column width={8}>
              <Link to="/Facebook">
                <Image id="facebook" src={facebook} alt="facebook" 
                size='large' centered
                />
              </Link>
            </Grid.Column>
            
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
              <Link to="/Instagram">
                <Image src={instagram} alt="instagram" centered />
              </Link>
            </Grid.Column>
            <Grid.Column width={5}>
              <Link to="/Linkedin">
              <Image src={linked} alt="linked" centered />
              </Link>
            </Grid.Column>
            <Grid.Column width={6}>
            	<Link to="/Spotify">
					<Image src={spotify} alt="spotify" centered />
				</Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          	<Grid.Column width={4}>
              
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={netflix} alt="netflix" fluid />
            </Grid.Column>
            <Grid.Column width={6}>
              <Link to="/Hulu">
              <Image src={hulu} alt="hulu" size='large' />
              </Link>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
        
        </Switch>
		</Router>
       

    );
  }
}

export default TheGrid;