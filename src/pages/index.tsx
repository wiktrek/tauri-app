import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [texts, setTexts] = useState(['example', 'example 2']);
  const [displayed, setDisplayed] = useState('');
  // change text every 5 minutes
  function changeText() {
    console.log(texts.length);
    setDisplayed(texts[getRandomText(texts.length)]);
    // setNewText('test');
  }

  function getRandomText(max: number) {
    return Math.floor(Math.random() * max);
  }

  function setNewText(text: string) {
    setTexts([...texts, text]);
  }
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <p>change text every 5 minutes</p>
      <p className="text-4xl">Text: {displayed}</p>
      <button onClick={changeText}>click me!</button>
    </div>
  );
}

export default App;
