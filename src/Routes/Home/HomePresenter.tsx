import * as React from "react";
import { ApolloError } from "apollo-client";
import console = require("console");

interface IProps {
  data: any;
  error: ApolloError;
  loading: boolean;
  onclick: any;
  onChangeName: any;
  name: string;
  sub: any;
}

const HomePresenter: React.SFC<IProps> = ({
  data,
  error,
  loading,
  onclick,
  onChangeName,
  name,
  sub
}) => {
  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>Error! {error.message}</div>;
  } else {
    return (
      <div>
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
      </div>
    );
  }
};

export default HomePresenter;
