import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
const [texts, setTexts] = useState([""])

// change text every 5 minutes
function change_text() {


  }



  return (
    <div className="h-screen bg-[#181a1b] text-white">
   <p>change text every 5 minutes</p>
      <button>click me!</button>
    </div>
  );
}

export default App;
