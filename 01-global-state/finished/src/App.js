import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { NameProvider } from './state/name';
import { CountProvider } from './state/count';
import UpdateValuesPage from './pages/UpdateValuesPage';
import ViewValuesPage from './pages/ViewValuesPage';

function App() {
  return (
    <NameProvider>
      <CountProvider>
        <div className="app-container">
          <Router>
            <div style={{ marginBottom: '40px' }}>
              <Link to="/" style={{ marginRight: '20px' }}>
                Update Values
              </Link>
              <Link to="/view">View Values</Link>
            </div>
            <Route path="/" exact component={UpdateValuesPage} />
            <Route path="/view" exact component={ViewValuesPage} />
          </Router>
        </div>
      </CountProvider>
    </NameProvider>
  );
}

export default App;
