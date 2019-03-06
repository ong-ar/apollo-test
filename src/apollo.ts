// Remove the apollo-boost import and change to this:
import ApolloClient from "apollo-client";
// Setup the network "links"
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
const wsurl = "ws://localhost:4466";
const httpurl = "http://localhost:4466";

const wsLink = new WebSocketLink({
  uri: wsurl,
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({
  uri: httpurl
});

interface Definintion {
  kind: string;
  operation?: string;
}

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
