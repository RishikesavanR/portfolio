import React, { Component } from 'react'
import './Headerright.css'
import {Link} from 'react-scroll'
export default class Headerright extends Component {
  render() {

    return <div className="nav">
      <LinkS />
      
    </div>;
  }
}

class LinkS extends React.Component {
	state = {
  	open: false
  }
  handleClick = () => {
  	this.setState({ open: !this.state.open });
  }
  render () {
  	const { open } = this.state;
  	return (
    	<div className="link">
    	  <span onClick={this.handleClick}>Click Me</span>
        <div className={`menu ${open ? 'open' : ''}`}>
          <ul>
            <li><Link to='About' >
            <h4>About</h4>
            </Link></li>
            <li><Link to='Qualifications'>
            <h4>Qualifications</h4>
            </Link></li>
            <li><Link to='Skillsets' >
            <h4>Skillsets</h4>
            </Link></li>
            <li><Link to='Projects' >
            <h4>Projects</h4>
            </Link></li>
            <li>
            <Link to='contact'
               >
            <h4>Contact</h4>
            </Link></li>
            
          </ul>
        </div>
    	</div>
    )
  }
}