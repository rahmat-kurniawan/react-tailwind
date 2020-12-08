import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectAdd from "./pages/ProjectAdd";
import Error from "./pages/Error";
import About from "./pages/About";

// import Notification from "./components/Notification";
// import LoadingButton from "./components/animations/LoadingButton";

function App() {
  return (
    <div className="App container">
      <Navigation />
      {/* <LoadingButton /> */}
      <div className="mt-5">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/project" component={Project} />
          <Route path="/project-add" component={ProjectAdd} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
