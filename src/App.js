import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <button type='button' onClick={this.toggle}>
            {this.state.showImage ? 'Hide' : 'Show'}
            
          </button>
          {this.state.showImage && (<img src={logo} className='App-logo' alt='logo' />)}
          
        </header>
      </div>
    );
  }
}

export default App;
