import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import New from "./pages/New";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/task/:id" component={Task} />
      <Route path="/new" component={New} />
    </Switch>
  );
}
