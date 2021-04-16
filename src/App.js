import "./App.css";
//import TestContainer from "./containers/test-container/test-container.component";
import React, { lazy, Suspense } from "react";
import NavLinks from "./ui/navigation/navigation.component";
//import TestPage from "./pages/homepage";
import Spinner from "./ui/spinner/spinner";
import { Switch, Route, Redirect } from "react-router-dom";
const TestContainer = lazy(() => import("./containers/test-container/test-container.component"));

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<Spinner />}>
          <NavLinks />
          <Route exact path="/" component={TestContainer} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
