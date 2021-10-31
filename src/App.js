import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        
      </Switch>
    </div>
  );
}

export default App;
