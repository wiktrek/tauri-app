import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState();
  const [instant, setInstant] = useState();
  async function start_stop() {
    setInstant(await invoke('start', { start: start }));
    if (start === true) {
      setStart(false);
    } else {
      setStart(true);
    }
  }
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <button onClick={start_stop}>{start ? 'stop' : 'start'}</button>
      <p>{response}</p>
      <a>I don't know how to make this work</a>
      <a>{instant}</a>
    </div>
  );
}

export default App;
