import "./App.css";
import Navbar from "./components/navbar";
import CurrentContent from "./components/currentCon";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const content = require("./content.json");

// Navbar is outside of the Switch to make it constant

function App() {
  const [currentContent, setCurrentContent] = useState(false);
  const [currentMarquee, setCurrentMarque] = useState("industries");

  useEffect(() => {
    setCurrentContent(content["pages"]);
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar changeMarquee={(current) => setCurrentMarque(current)} />
        <Switch>
          <Route path="/">
            {currentContent ? (
              <CurrentContent
                content={currentContent}
                currentMarquee={currentMarquee}
              />
            ) : null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
