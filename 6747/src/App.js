import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './components/LoadingContext';  
import LoadingIndicator from './components/LoadingIndicator';
import './App.css';
import Wave from './components/Wave.jsx';
function App() {
  return (
    <Router>
      <LoadingProvider>
        <LoadingIndicator />
    <div className="App">
      <header className="App-header">
        <h1>
                <span class="white">0203 835 3250</span></h1>
        <Wave />
      </header>
    </div>
    </LoadingProvider>
    </Router>
  );
}

export default App;
