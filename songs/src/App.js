import React, { useState } from "react";
import spaceSong from './assets/space.mp3'
import dutchie from './assets/dutchie.mp3'

export default function App() {

  const [song, setSong] = useState(dutchie);

  const handleSong= () => {
    if (song === spaceSong) {
      setSong(dutchie)
    }
    else {
      setSong(spaceSong)
    }
  }

  return (
    <>
      <h1>Home</h1>
      <audio controls>
        <source src={song} type="audio/mpeg" />
      </audio>
      <h1>{song}</h1>
      <div>
        <button onClick={handleSong}>PLAY THE SONG, BABY!</button>
      </div>


    </>


  );
}

