import React from "react";
import Intro from "./Screen/Intro";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import route from "./route";
import Notfound from "./Screen/Notfound";
import Question1 from "./Screen/Question_P1";
import ResultDW from "./Screen/Result_DW";
import ReadDW from "./Screen/Read_DW";
import ShortBook from "./Screen/ShortBook";
import Schedule from "./Screen/Schedule";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={route.home} exact>
            <Intro />
          </Route>
          <Route path={route.question1} exact>
            <Question1 />
          </Route>
          <Route path={route.result} exact>
            <ResultDW />
          </Route>
          <Route path={route.read} exact>
            <ReadDW />
          </Route>
          <Route path={route.shortBook} exact>
            <ShortBook />
          </Route>
          <Route path={route.schedule} exact>
            <Schedule />
          </Route>
          <Route>
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
