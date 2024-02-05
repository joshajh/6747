import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const tracks = [
'https://pssblwrlds.xyz:8010/radio.mp3'
];

const WavePlayer = () => {
  const waveSurferRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });

    waveSurferRef.current.load(tracks[trackIndex]);

    waveSurferRef.current.on('finish', () => {
      const nextTrackIndex = trackIndex + 1 < tracks.length ? trackIndex + 1 : 0;
      setTrackIndex(nextTrackIndex);
      waveSurferRef.current.load(tracks[nextTrackIndex]);
    });

    return () => waveSurferRef.current.destroy();
  }, [trackIndex]);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
    }
  }, [trackIndex]);

  return (
    <div>
      <div id="waveform"></div>
      <button onClick={() => waveSurferRef.current.playPause()}>Play/Pause</button>
    </div>
  );
};

export default WavePlayer;
