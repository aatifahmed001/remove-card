import React, { Component } from 'react';
import './App.css';
import Usercard from './components/Usercard';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClosed: true,
      isCopy: true
    }
  }

  handleUserCard = () => {
    this.setState({
      isClosed: false
    })
  }
  copyUserCard =() =>{
    
      console.log("Card copy");
    
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                this.state.isClosed ? <Usercard handleUserCard={this.handleUserCard} /> : null
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
