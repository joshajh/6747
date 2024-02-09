import React, { useState } from 'react'; // Ensure to import React and useState hook
import { Container, Row, Col } from "react-bootstrap";
import WavesurferPlayer from '@wavesurfer/react';

const HeaderBar = () => {
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
        <Container top={0}>
            <Row>
    <WavesurferPlayer
        height={100}
        waveColor="rgba(196, 255, 196, 0.8)"
        progressColor="rgba(255, 0, 0, 0.8)"
        barWidth={6}
        barRadius={4}
        barGap={4}
        url="https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1-01.mp3"
        normalize={true}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button className="play-button" onClick={onPlayPause}>
        {isPlaying ? '⏸︎' : '⏵'}
      </button>
      <h1>0203 <span className="red">835</span><span className="green"> 3250</span></h1>
</Row>
</Container>
</>
);
};

export default HeaderBar;