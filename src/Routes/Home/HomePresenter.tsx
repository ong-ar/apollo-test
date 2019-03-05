import * as React from "react";
import { ApolloError } from "apollo-client";

interface IProps {
  data: any;
  error: ApolloError;
  loading: boolean;
}

const HomePresenter: React.SFC<IProps> = ({ data, error, loading }) => {
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default HomePresenter;
