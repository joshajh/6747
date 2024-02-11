import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div onClick={togglePlayPause} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </div>
  );
};

export default AudioPlayer;
