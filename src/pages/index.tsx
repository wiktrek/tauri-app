import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  useEffect(() => {
    let a = 0;
    const myInterval = setInterval(() => {
      setSeconds(a + 1);
      console.log(a);
      console.log(start);
      if (start === true) {
        setTimerSeconds(seconds);
      }
      a += 1;
    }, 1000);
    return () => {
      console.log('Clearing interval');
      clearInterval(myInterval);
    };
  }, []);
  async function start_stop() {
    // setInstant(await invoke('start'));
    if (start === false) {
      setStart(true);
      setSeconds(0);
    } else {
      setStart(false);
    }
  }
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <button onClick={start_stop}>{start ? 'stop' : 'start'}</button>
      <p>{timerSeconds}</p>
      <a>{start ? 'true' : 'false'}</a>
      <a>I don't know how to make this work</a>
    </div>
  );
}

export default App;
