import React, { useState } from 'react'; // Ensure to import React and useState hook
import { ClipLoader } from 'react-spinners'; // Import ClipLoader from react-spinners
import WavesurferPlayer from '@wavesurfer/react';

const Wave = () => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state


  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
    setIsLoading(false); // Set loading to false when the audio is ready
  };

  const onPlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
      setIsPlaying(!isPlaying); // Toggle playing state based on previous state
    }
  };

  return (
    <>
      <WavesurferPlayer
        height={100}
        waveColor="#b2beb5"
        progressColor="#000000"
        barWidth={4}
        barRadius={4}
        barGap={4}
        url="https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1.mp3"
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  );
};

export default Wave;