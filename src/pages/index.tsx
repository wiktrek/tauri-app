import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);
  }, []);
  async function start_stop() {
    // setInstant(await invoke('start'));
    if (start === false) {
      setStart(true);
    } else {
      setStart(false);
    }
  }
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <button onClick={start_stop}>{start ? 'stop' : 'start'}</button>
      <p>{seconds}</p>
      <a>{start ? 'true' : 'false'}</a>
      <a>I don't know how to make this work</a>
    </div>
  );
}

export default App;
