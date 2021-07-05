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
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={route.home} exact>
              <GAHoc>
                <Intro />
              </GAHoc>
            </Route>
            <Route path={route.question1} exact>
              <GAHoc>
                <Question1 />
              </GAHoc>
            </Route>
            <Route path={route.result_nt} exact>
              <GAHoc>
                <ResultDW />
              </GAHoc>
            </Route>
            <Route path={route.result_nf} exact>
              <GAHoc>
                <ResultDH />
              </GAHoc>
            </Route>
            <Route path={route.result_st} exact>
              <GAHoc>
                <ResultPW />
              </GAHoc>
            </Route>
            <Route path={route.result_sf} exact>
              <GAHoc>
                <ResultPH />
              </GAHoc>
            </Route>
            <Route path={route.shortBook} exact>
              <GAHoc>
                <ShortBook />
              </GAHoc>
            </Route>
            <Route path={route.schedule} exact>
              <GAHoc>
                <Schedule />
              </GAHoc>
            </Route>
            <Route path={route.thanks} exact>
              <GAHoc>
                <Thanks />
              </GAHoc>
            </Route>
            <Route path={route.data} exact>
              <GAHoc>
                <Data />
              </GAHoc>
            </Route>
            <Route>
              <GAHoc>
                <Notfound />
              </GAHoc>
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </ApolloProvider>
  );
}
export default App;
