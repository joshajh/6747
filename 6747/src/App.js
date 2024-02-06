import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading.jsx';
import Wave from './components/Wave.jsx';
import ReactModal from 'react-modal';

function App() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="body">
      <header className="App-header">
        <h1>
                <span class="white">0203 835 3250</span></h1>
      </header>
        <Wave />
    </div>
  );
}

export default App;
