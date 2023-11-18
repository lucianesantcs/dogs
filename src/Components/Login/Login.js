import React, { useContext } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);
  let match = useRouteMatch();

  if (login === true) return <Redirect to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route path={`${match.url}/`} exact component={LoginForm} />
          <Route path={`${match.path}/criar`} component={LoginCreate} />
          <Route path={`${match.path}/perdeu`} component={LoginPasswordLost} />
          <Route path={`${match.path}/reset`} component={LoginPasswordReset} />
        </Switch>
      </div>
    </section>
  );
};

export default Login;
