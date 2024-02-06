import React, { useState } from 'react'; // Ensure to import React and useState hook
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
        height={80}
        waveColor="rgba(196, 255, 196, 0.6)"
        progressColor="rgba(255, 0, 0, 0.6)"
        barWidth={6}
        barRadius={4}
        barGap={4}
        url="https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1.mp3"
        normalize={true}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button onClick={onPlayPause}>
        {isPlaying ? '⏸︎' : '⏵'}
      </button>
    </>
  );
};

export default Wave;