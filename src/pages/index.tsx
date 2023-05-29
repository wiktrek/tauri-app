import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  interface Text {
    name: string;
    definition: string;
  }

  const [texts, setTexts] = useState<Text[]>([]);
  const [displayed, setDisplayed] = useState<Text>({} as Text);
  const [error, setError] = useState('');
  // change text every 5 minutes
  function changeText() {
    console.log(texts);
    const random = getRandomText(texts.length);
    if (texts.length <= 1) {
      return setError('You need to add more texts');
    } else {
      setError('');
    }
    let text = texts[random];
    if (text.name === displayed.name) return changeText();
    setDisplayed(text);

    // setNewText('test');
  }

  function getRandomText(max: number) {
    let number = Math.floor(Math.random() * max);
    // console.log(number, max, texts);
    return number;
  }

  function setNewText() {
    let input = (document.getElementById('text') as HTMLInputElement).value;
    let input2 = (document.getElementById('text2') as HTMLInputElement).value;

    texts.forEach((text) => {
      if (input === text.name)
        return setError('There is a text with the same name');
    });
    setError('');
    if (input === '' || input2 === '') return setError('Inputs are empty');
    // console.log(input, input2);
    let text: Text = {
      name: input,
      definition: input2,
    };

    setTexts([...texts, text]);
    // setTexts([...texts, ...exampleTexts]);
  }
  /* <button onClick={setNewText}>wiktrek</button> */
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <p>change text every 5 minutes</p>
      <p className="text-4xl">
        <button onClick={() => {}}>{displayed.name}</button>
      </p>
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
        <button onClick={setNewText}>Add words</button>
      </p>
      <p className=" text-red-800">{error}</p>
    </div>
  );
}

export default App;
