import React from "react";

import "./test-details.style.scss";

class TestDetails extends React.Component {
  render() {
    let test = <p>Select a test</p>;

    if (this.props.authorId) {
      console.log("it worked");
      test = (
        <div className="test-details">
          <h1>Title</h1>
          <p>Content</p>
          <div className="edit">
            <button className="delete">Delete</button>
          </div>
        </div>
      );
    }
    return test;
  }
}

export default TestDetails;
