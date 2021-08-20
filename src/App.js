import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Index from "./pages/index";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
