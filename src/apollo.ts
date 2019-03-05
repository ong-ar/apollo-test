import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/sis-b30d5e/test/dev"
});

export default client;
