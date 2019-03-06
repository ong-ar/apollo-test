import * as React from "react";
import { ApolloError } from "apollo-client";

interface IProps {
  data: any;
  error: ApolloError;
  loading: boolean;
  onclick: any;
  onChangeName: any;
  name: string;
}

const HomePresenter: React.SFC<IProps> = ({
  data,
  error,
  loading,
  onclick,
  onChangeName,
  name
}) => {
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
      <input
        type="text"
        onChange={e => onChangeName(e.target.value)}
        value={name}
      />
      <button type="button" onClick={onclick}>
        click
      </button>
    </ul>
  );
};

export default HomePresenter;
