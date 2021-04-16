import React from "react";
import "./test-details.style.scss";
import axios from "axios";
//import Test from "../test-block/test-block.component";
import Question from "../questions-block/questions-block.component";
import Spinner from "../../ui/spinner/spinner";
//import NewPost from "../NewPost/NewPost";

class TestDetails extends React.Component {
  state = {
    tests: [],
    loadedTest: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.authorId !== prevProps.authorId) {
      axios.get("tests2.json").then((response) => {
        this.setState({ tests: response.data.tests });
        console.log(this.state.tests);
      });
    }
  }
  questionHandler = (testId) => {
    this.setState({ loadedTest: testId });
    // console.log("opened");
  };

  render() {
    let test = <p>select a Test!</p>;
    if (!this.props.authorId === this.state.loadedTest) {
      test = <Spinner />;
    }
    if (this.props.authorId !== this.state.loadedTest) {
      test = (
        <div>
          {
            (test = this.state.tests
              .filter((test) => test.authorId === this.props.authorId)
              .map(({ test, ...otherProps }) => {
                return <Question key={test} {...otherProps} />;
              }))
          }
        </div>
      );
      console.log(this.state.tests);
    }
    return test;
  }
}
export default TestDetails;
