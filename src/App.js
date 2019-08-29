import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from "./component/Blog";
import notFound from "./component/NotFound";
import {Switch} from "react-router";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Blog} />
            <Route path={"/blog"} component={Blog} />
            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
