import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join.js";
import Chat from "./component/Chat.js";
import JoinChat from "./component/JoinChat";
import VerifyChat from "./component/VerifyChat";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/joinchat" exact component={JoinChat} />
        <Route path="/verify" exact component={VerifyChat} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
