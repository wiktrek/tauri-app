import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [texts, setTexts] = useState(['example', 'example 2']);
  const [displayed, setDisplayed] = useState('');
  // most used english  words according to wikipedia.com
  let exampleTexts = [
    'the',
    'be',
    'to',
    'of',
    'and',
    'a',
    'in',
    'that',
    'have',
    'I',
    'for',
    'not',
  ];

  // change text every 5 minutes
  function changeText() {
    const random = getRandomText(texts.length);
    let text = texts[random];
    if (text === displayed) return changeText();
    setDisplayed(text);

    // setNewText('test');
  }

  function getRandomText(max: number) {
    let number = Math.floor(Math.random() * max);
    console.log(number, max, texts);
    return number;
  }

  // function setNewText() {
  //   setTexts([...texts, ...exampleTexts]);
  //   // setTexts([...texts, text]);
  // }
  /* <button onClick={setNewText}>wiktrek</button> */

  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <p>change text every 5 minutes</p>
      <p className="text-4xl">Text: {displayed}</p>

      <button onClick={changeText}>click me!</button>
    </div>
  );
}

export default App;
