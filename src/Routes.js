import React from "react";
import { BrowserRouter as Routers,Route} from "react-router-dom";
import Login from "./containers/Login"
import Main from "./components/Main"
export default function Links() {
  return (
    <Routers>
          <Route path="/" component={Main}/>
          <Route path="/login" component={Login}/>
    </Routers>
  );
}