import React, { Component } from 'react';

class Instagram extends Component {

	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	
	componentDidMount() {
		fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=a0338e46985c4912aba17b305d9c499c')
		.then((res) => res.json())
		.then((resdata) => {
			this.setState({data: resdata.images})
			console.log(resdata)
		})
	}

  render() {
  	console.log(this.state.data);
    return (
      <div>

      <h1>My Instagram</h1>
      

      </div>
    );
  }
}

export default Instagram;