import * as React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { USERS, CREATE_USER } from "./HomeQueries";
import console = require("console");

const HomeContainer = () => {
  const [name, setName] = React.useState("");
  const { data, error, loading } = useQuery(USERS);
  const createUser = useMutation(CREATE_USER, {
    variables: { name },
    update: (proxy, mutationResult) => {
      console.log(proxy);
      console.log(mutationResult);
    },
    refetchQueries: [{ query: USERS }]
  });
  return (
    <React.Fragment>
      <HomePresenter
        data={data}
        error={error}
        loading={loading}
        onclick={createUser}
        name={name}
        onChangeName={setName}
      />
    </React.Fragment>
  );
};

export default HomeContainer;
