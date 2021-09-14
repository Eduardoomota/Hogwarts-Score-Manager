import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import HousesEdit from "../pages/HousesEdit";

const Routes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/houses/:name" component={HousesEdit} />
      <Route path="/" component={Home} />
    </Switch>
  </>
);

export default Routes;
