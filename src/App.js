import Home from "./pages/Home";
import CharacterView from "./pages/CharacterView"
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle }  from "styled-components";

const GlobalStyle = createGlobalStyle`
* {    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  
}
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/character/:id" component={CharacterView} />
      </Switch>
    </div>
    </>
  );
}

export default App;
