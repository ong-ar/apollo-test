import * as React from "react";
import HomePresenter from "./HomePresenter";
import { useQuery } from "react-apollo-hooks";

import { USERS } from "./HomeQueries";

const HomeContainer = () => {
  const { data, error, loading } = useQuery(USERS);
  return (
    <React.Fragment>
      <HomePresenter data={data} error={error} loading={loading} />
    </React.Fragment>
  );
};

export default HomeContainer;
