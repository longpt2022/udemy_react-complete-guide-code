import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App RUNNING');

  const toggleParagraphHandle = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandle = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandle}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandle}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
