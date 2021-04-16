import React from "react";
import Test from "../../components/test-block/test-block.component";
import axios from "axios";
import TestDetails from "../../components/test-details/test-details.component";
//import TestPage from "../../pages/homepage";
//import NewPost from "../../components/NewPost/NewPost";

class TestContainer extends React.Component {
  state = {
    tests: [],
    selectedTestId: null,
  };

  componentDidMount() {
    axios.get("tests2.json")
    .then((response) => {
      const tests = response.data.tests.slice(0);
      const updatedTests = tests.map((test) => {
        return {
          ...test,
        };
      });
      this.setState({ tests: updatedTests });
     console.log(tests);
    });
  }

  openSelectedHandler = (authorId) => {
    this.setState({ selectedTestId: authorId });

     console.log(this.props);
  };

  render() {
    const tests = this.state.tests.map((test) => {
      return (
        <Test
          key={test.authorId}
          title={test.title}
          questions={test.questions.length}
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
      {/* <TestPage/> */}
        <section className="test-container">{tests}</section>
        <section>
          <TestDetails authorId={this.state.selectedTestId} />
        </section>
        {/* <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default TestContainer;
