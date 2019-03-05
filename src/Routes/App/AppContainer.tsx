import * as React from "react";
import AppPresenter from "./AppPresenter";
import { ApolloProvider } from "react-apollo";
import client from "../../apollo";

const AppContainer = () => (
  <React.Fragment>
    <ApolloProvider client={client}>
      <AppPresenter />
    </ApolloProvider>
  </React.Fragment>
);

export default AppContainer;
