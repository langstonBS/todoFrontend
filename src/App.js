import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDoPage  from './todopage'
function App() {
  return (
          <>
            <Router>
                <Switch>
                 <Route>
                  <ToDoPage />
                </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
