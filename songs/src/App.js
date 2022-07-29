import React, { useState, useRef } from "react";
import spaceSong from './assets/space.mp3'
import dutchie from './assets/dutchie.mp3'

export default function App() {

  const audioPlayer = useRef()
  const [song, setSong] = useState(dutchie);

  const handleSong = () => {
    if (song === spaceSong) {
      setSong(dutchie)
    }
    else {
      setSong(spaceSong)
    }

    audioPlayer.current.load();
    audioPlayer.current.play();
  }
  const handlePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  function handleVolume(option) {
    if (option === 'aumentar' && audioPlayer.current.volume < 1) {
      audioPlayer.current.volume += 0.2;

    } else if (option === 'diminuir') {
      audioPlayer.current.volume -= 0.2;

    }
  }

  return (
    <>
      <h1>Music Player</h1>
      <div>
        <h1>{song === dutchie ? 'Dutchie' : 'Space Song'}</h1>
        <audio controls volume={0.5} ref={audioPlayer} >
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>
      <div>
        <br />
        <button onClick={handleSong}>MUDAR MUSICA</button>
        <br />
        <br />
        <button onClick={handlePlay}>PLAY THE SONG</button>
        <br />
        <button onClick={() => handleVolume('aumentar')}>Aumentar volume</button>
        <button onClick={() => handleVolume('diminuir')}>Diminuir volume</button>
      </div>
    </>
  );
}

