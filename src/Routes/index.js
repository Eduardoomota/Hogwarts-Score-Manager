import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";

// PAGES
import Home from "../pages/Home";
import HousesEdit from "../pages/HousesEdit";

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/houses/:name" component={HousesEdit} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
