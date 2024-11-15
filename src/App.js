import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
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
      <>
      <Helmet>
      <title>6,747 Names | Possible Worlds</title>
      <meta name="description" content="This is a list of the names and ages of the first 6,747 people killed in Israel's war on Gaza. The names are read by the composited voice of several young Gazan men."/>
      <link rel="canonical" href="https://6747.possibleworlds.space"/>
      <meta name="robots" content="index/follow"/>
      <meta name="googlebot" content="index/follow"/>
      <meta itemprop="name" content="6,747 Names | Possible Worlds"/>
      <meta itemprop="description" content="This is a list of the names and ages of the first 6,747 people killed in Israel's war on Gaza. The names are read by the composited voice of several young Gazan men."/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="6,747 Names | Possible Worlds"/>
      <meta property="og:url" content="https://6747.possibleworlds.space"/>
      <meta property="og:site_name" content="Fantasia | Web-radio from Possible Worlds"/>
      <meta property="og:image" content="https://possibleworlds.space/img/perm/social-card.jpg"/>
      <meta property="og:description" content="This is a list of the names and ages of the first 6,747 people killed in Israel's war on Gaza. The names are read by the composited voice of several young Gazan men."/>
      <meta property="og:locale" content="en_GB"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="6,747 Names | Possible Worlds"/>
      <meta name="twitter:description" content="This is a list of the names and ages of the first 6,747 people killed in Israel's war on Gaza. The names are read by the composited voice of several young Gazan men."/>
      <meta name="twitter:image" content="https://possibleworlds.space/img/perm/social-card.jpg"/>
    </Helmet>
      <div className="App">
        <header className="App-header">
          <h1><span className='title'>6,747 Names</span></h1><h2 span className='number'>0203 835 3250</h2><span className='icons'><AudioPlayer src="https://p-w.lon1.cdn.digitaloceanspaces.com/6747/clip.mp3" /><span className='spacer'></span><FaQuestionCircle onClick={openModal} size={30} style={{ cursor: 'pointer' }} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p><span className='worlds'>This is a list of the names and ages of the first 6,747 people killed in Israel's war on Gaza. The names are read by the composited voice of several young Gazan men.</span></p>
        <p>The voice is built from recordings of interviews with teenagers and young adults about their experiences of detention at the hands of the Israeli state. The interviews were conducted by Palestinian news outlets between 2007 and around 2019. The recordings were collated and pre-processed, then used as a training corpus for the creation of a single composite using the <a href="https://elevenlabs.io/" target='blank'>ElevenLabs</a> speech synthesis model. Once the composite was complete, the ElevenLabs text-to-speech engine was used to produce the vocal performance.</p>
        <p><span className='worlds'>The full recording of 6,747 names is 5 hours, 29 minutes, and 4 seconds in duration, and can be heard in its entirety by calling 0203 835 3250 from any phone</span>. The first 20 minutes is available on this page.</p>
        <p>The list covers the period 7 to 26 October 2023, and does not include the names of 281 unidentified persons killed during that time. <a href="https://www.scribd.com/document/681084315/List-of-Martyrs-in-Gaza-as-October-26-2023-as-reported-by-the-Gaza-Ministry-of-Health" target='blank'>The data</a> was provided by the Ministry of Health of the State of Palestine. More than 26,000 people are thought to have been killed by Israeli forces during the siege of Gaza. As of February 2024, the number continues to rise.</p>
        <p>This work was made by <a href="https://possibleworlds.space"><span className="possible">Possible</span> <span className="worlds">Worlds</span></a>, a publisher and project space based in Great Yarmouth, UK, and <a href="https://joshhall.net" target="blank">Josh Hall</a>. The source code for this web app and the Twilio app that runs the phone number are available on the <a href="https://github.com/possible-worlds/6747">Possible Worlds GitHub</a>.</p>
      </Modal></span>
        </header>
        <main>
          <ResponsiveText />
        </main>
      </div>
      </>
    );
  }
  
  export default App;