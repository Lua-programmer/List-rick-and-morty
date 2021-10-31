import Home from "./pages/Home";
import CharacterView from "./pages/CharacterView"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/character/:id" component={CharacterView} />
      </Switch>
    </div>
  );
}

export default App;
