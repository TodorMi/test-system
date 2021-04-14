import "./App.css";
import TestContainer from "./containers/test-container/test-container.component";
import React from "react";
import NavLinks from "./ui/navigation/navigation.component";

class App extends React.Component {
  render() {
    return (
      
      <div className="App">
        <NavLinks />
        <TestContainer />
      </div>
    );
  }
}

export default App;
