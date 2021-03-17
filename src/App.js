import "./App.css";
import Navbar from "./components/navbar";
import Marquee from "./components/Marquee";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const content = require("./content.json");

function App() {
  const [currentContent, setCurrentContent] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(false)

  useEffect(() => {
    let allContent = content['pages']
    setCurrentContent(allContent)
    // const path = location.pathname.split("/");
    // const slug = path[path.length - 1];
    // for ()
  }, []);


  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            {currentContent ? <Marquee content={currentContent} /> : null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
