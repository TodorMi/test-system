import "./App.css";
import TestContainer from "./containers/test-container/test-container.component";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
      <TestContainer />
      </div>
    );
  }
}

export default App;
