import React, { useState } from 'react';
import ResponsiveText from './components/ResponsiveText';
import AudioPlayer from './components/AudioPlayer';
import Modal from './components/Modal';
import { FaQuestionCircle } from 'react-icons/fa';
import './App.css'

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
      <div className="App">
        <header className="App-header">
          <h1><span className='title'>6,749 Names</span></h1><h2 span className='number'>0203 835 3250</h2><span className='icons'><AudioPlayer src="https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1.mp3" /><span className='spacer'></span><FaQuestionCircle onClick={openModal} size={30} style={{ cursor: 'pointer' }} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>This is a list of the names and ages of the first 6,749 people killed in Israel's war on Gaza. 
        The names are read by the composited voice of several young Gazan men.</p>
        <p>The voice is built from recordings of interviews with teenagers and young adults about their experiences of detention at the hands of the Israeli state. The interviews were conducted by
        various Palestinian news outlets between 2007 and around 2019. The recordings were collated and pre-processed, then used as a training corpus for the creation of a single composite using the ElevenLabs speech synthesis model. Once the composite was complete, the ElevenLabs text-to-speech engine was used to produce the vocal performance.</p>
        <p>The full recording of 6,479 names is 5 hours, 29 minutes, and 4 seconds in duration, and can be heard in its entirety by calling 0203 835 3250 from any phone. The first 20 minutes is available on this page.</p>
        <p>The list covers the period 7 to 26 October 2023, and does not include the names of 281 unidentified persons killed during that time. The data was provided by the Ministry of Health of the State of Palestine.</p>
        <p>More than 26,000 people are thought to have been killed by Israeli forces during the siege of Gaza. As of February 2024, the number continues to rise.</p>
        <p>This work was made by <a href="https://possibleworlds.space"><span className="possible">Possible</span> <span className="worlds">Worlds</span></a>, a publisher and project space based in Great Yarmouth, UK, and <a href="https://joshhall.net" target="blank">Josh Hall</a>.</p>
      </Modal></span>
        </header>
        <main>
          <ResponsiveText />
        </main>
      </div>
    );
  }
  
  export default App;