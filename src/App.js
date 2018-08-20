import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h2 className="list-header">Indian States</h2>
            <List placeholder="Search state"/>
        </div>
    );
  }
}

export default App;
