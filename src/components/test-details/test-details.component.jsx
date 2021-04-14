import React from "react";
import "./test-details.style.scss";
import axios from "axios";
//import Test from "../test-block/test-block.component";
import Question from "../questions-block/questions-block.component";

class TestDetails extends React.Component {
  state = {
    tests: [],
    loadedTest: null,
  };
  //  openSelectedHandler = (questions) => {
  //   this.setState({ loadedTest: questions });
  //   // console.log("opened");
  // };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios.get("tests.json").then((response) => {
        const tests = response.data.slice(0);
        const updatedTests = tests.map((test) => {
          return {
            ...test,
          };
        });
        // console.log(response);
        this.setState({ loadedTest: updatedTests });
      });
    }
  }

  render() {
    let test = <p>select a Test!</p>;
    if (this.props.authorId) {
      test = <p>Loading...!</p>;
    }
    if (this.props.authorId !== this.state.loadedTest) {
      test = (
        <div>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.content}</p>
        </div>
      );
    }
    return test;
  }
}
export default TestDetails;
