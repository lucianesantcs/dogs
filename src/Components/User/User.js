import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  let match = useRouteMatch();

  return (
    <section className="container">
      <UserHeader />
      <Switch>
        <Route path={`${match.url}/`} exact component={Feed} />
        <Route path={`${match.path}/postar`} component={UserPhotoPost} />
        <Route path={`${match.path}/estatisticas`} component={UserStats} />
      </Switch>
    </section>
  );
};

export default User;
