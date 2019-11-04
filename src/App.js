import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Pexels from "./containers/Pexels/Pexels";
import Categories from "./containers/Categories/Categories";

import "./App.scss";

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Pexels} />
        <Suspense fallback={null}>
            <Route path="/categories" component={Categories} />
        </Suspense>
    </Switch>
  );
}

export default App;
