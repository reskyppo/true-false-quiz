import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
