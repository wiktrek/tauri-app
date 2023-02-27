import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState();
  async function start_stop() {
    setStart(await invoke('start', { start: start }));
    if (start === true) {
      timer();
    }
  }
  async function timer() {
    setResponse(await invoke('timer', { start: start }));
  }
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <button onClick={start_stop}>{start ? 'stop' : 'start'}</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
