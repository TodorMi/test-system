import React from "react";
import Test from "../../components/test-block/test-block.component";
import axios from "axios";
import TestDetails from "../../components/test-details/test-details.component";
import NewPost from "../../components/NewPost/NewPost";

class TestContainer extends React.Component {
  state = {
    tests: [],
    selectedTestId: null,
  };

  componentDidMount() {
    axios.get("tests.json").then((res) => {
      const tests = res.data.slice(0);
      const updatedTests = tests.map((test) => {
        return {
          ...test,
        };
      });
      this.setState({ tests: updatedTests });
      console.log(res);
    });
  }

  openSelectedHandler = (authorId) => {
    this.setState({ selectedTestId: authorId });
    // console.log("opened");
  };

  render() {
    const tests = this.state.tests.map((test) => {
      return (
        <Test
          key={test.authorId}
          title={test.title}
          questions={test.questions}
          completed={test.timesCompleted}
          author={test.author}
          clicked={() => {
            this.openSelectedHandler(test.authorId);
            // console.log(test.questions);
          }}
        />
      );
    });
    return (
      <div>
        <section className="test-container">{tests}</section>
        <section>
          <TestDetails authorId={this.state.selectedTestId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default TestContainer;
