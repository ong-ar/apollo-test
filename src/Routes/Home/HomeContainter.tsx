import * as React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery, useMutation, useSubscription } from "react-apollo-hooks";
import { USERS, CREATE_USER, SUBSCRIPTION_USER } from "./HomeQueries";
import console = require("console");

const HomeContainer = () => {
  const [name, setName] = React.useState("");
  const [sub, setSub] = React.useState();
  const { data, error, loading } = useQuery(USERS);
  const createUser = useMutation(CREATE_USER, {
    variables: { name },
    update: (proxy, mutationResult) => {},
    refetchQueries: [{ query: USERS }]
  });
  const {
    data: subData,
    error: subError,
    loading: subLoading
  } = useSubscription(SUBSCRIPTION_USER);

  console.log(subData, subError, subLoading);

  return (
    <React.Fragment>
      <HomePresenter
        data={data}
        error={error}
        loading={loading}
        onclick={createUser}
        name={name}
        onChangeName={setName}
        sub={sub}
      />
    </React.Fragment>
  );
};

export default HomeContainer;
