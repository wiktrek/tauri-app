import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  interface Text {
    name: string;
    definition: string;
  }

  const [texts, setTexts] = useState([{} as Text, {} as Text]);
  const [displayed, setDisplayed] = useState('');

  // change text every 5 minutes
  function changeText() {
    const random = getRandomText(texts.length);
    let text = texts[random];
    if (text.name === displayed) return changeText();
    setDisplayed(text.name);

    // setNewText('test');
  }

  function getRandomText(max: number) {
    let number = Math.floor(Math.random() * max);
    console.log(number, max, texts);
    return number;
  }

  function setNewText() {
    let text: Text = {
      name: 'string',
      definition: 'string',
    };

    setTexts([...texts, text]);
    // setTexts([...texts, ...exampleTexts]);
  }
  /* <button onClick={setNewText}>wiktrek</button> */
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <p>change text every 5 minutes</p>
      <p className="text-4xl">Text: {displayed}</p>
      <button onClick={changeText}>click me!</button>
      <p>
        <input
          id="text"
          type="text"
          className="text-black"
          placeholder="text"
        />
      </p>
      <input
        id="text2"
        type="text"
        className="text-black"
        placeholder="definition"
      />
      <p>
        <button>Add words</button>
      </p>
    </div>
  );
}

export default App;
