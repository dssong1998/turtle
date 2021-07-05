import React from "react";
import Intro from "./Screen/Intro";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import route from "./route";
import Notfound from "./Screen/Notfound";
import Question1 from "./Screen/Question_P1";
import ShortBook from "./Screen/ShortBook";
import Schedule from "./Screen/Schedule";
import ResultDW from "./Screen/Results/Result_DW";
import ResultDH from "./Screen/Results/Result_DH";
import ResultPW from "./Screen/Results/Result_PW";
import ResultPH from "./Screen/Results/Result_PH";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import Thanks from "./Screen/Thanks";
import Data from "./Screen/Data";
import GAHoc from "./GA";

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <GAHoc>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path={route.home} exact>
                <Intro />
              </Route>
              <Route path={route.question1} exact>
                <Question1 />
              </Route>
              <Route path={route.result_nt} exact>
                <ResultDW />
              </Route>
              <Route path={route.result_nf} exact>
                <ResultDH />
              </Route>
              <Route path={route.result_st} exact>
                <ResultPW />
              </Route>
              <Route path={route.result_sf} exact>
                <ResultPH />
              </Route>
              <Route path={route.shortBook} exact>
                <ShortBook />
              </Route>
              <Route path={route.schedule} exact>
                <Schedule />
              </Route>
              <Route path={route.thanks} exact>
                <Thanks />
              </Route>
              <Route path={route.data} exact>
                <Data />
              </Route>
              <Route>
                <Notfound />
              </Route>
            </Switch>
          </Router>
        </GAHoc>
      </HelmetProvider>
    </ApolloProvider>
  );
}
export default App;
