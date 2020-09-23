import React, {Component} from 'react';
import './Stylesheets/App.scss';
import Container from "./Components/Container";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Container/>
        </div>
    );
  }
}

export default App;