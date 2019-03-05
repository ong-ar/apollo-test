import * as React from "react";
import AppPresenter from "./AppPresenter";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "../../apollo";

const AppContainer = () => (
  <React.Fragment>
    <ApolloHooksProvider client={client}>
      <AppPresenter />
    </ApolloHooksProvider>
  </React.Fragment>
);

export default AppContainer;
