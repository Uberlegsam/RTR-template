import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainPage } from "./pages";

import { Loading } from "./components/molecules";

import { RootReducer } from "./reducers";

import "./styles/index.scss";

type RootState = ReturnType<typeof RootReducer>;

const App: React.FC = () => {
  const loading = useSelector((state: RootState) => state.app.loading);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      {loading && <Loading />}
    </BrowserRouter>
  );
};

export default App;
