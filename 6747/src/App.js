import React, { useState, useEffect } from 'react';
import './App.css';
import Headline from './components/Headline.jsx';
import Loading from './components/Loading.jsx';
import Wave from './components/Wave.jsx';

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
    <div className='body'>
        <Headline />
        <Wave />
        </div>
  );
}

export default App;
