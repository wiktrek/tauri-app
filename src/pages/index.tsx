import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';

function App() {
  return (
    <div className="h-screen bg-[#181a1b] text-white">
      <a>Idk</a>
      <button>click me!</button>
    </div>
  );
}

export default App;
