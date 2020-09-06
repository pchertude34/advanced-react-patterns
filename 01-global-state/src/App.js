import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UpdateValuesPage from './pages/UpdateValuesPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" exact component={UpdateValuesPage} />
      </Router>
    </div>
  );
}

export default App;
