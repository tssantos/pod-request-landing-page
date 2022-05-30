import React from 'react';

import { ReactComponent as Logo } from './assets/logo.svg';

import styles from './App.module.css';
import InputForm from './components/InputForm';

import { ReactComponent as Spotify } from './assets/spotify.svg';
import { ReactComponent as PocketCasts } from './assets/pocket-casts.svg';
import { ReactComponent as GooglePodcasts } from './assets/google-podcasts.svg';
import { ReactComponent as ApplePodcasts } from './assets/apple-podcast.svg';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.content}>
          <h1><span className={styles.green}>Publish your podcasts</span><br/>everywhere.</h1>
          <p>Upload your audio to Pod with a single click. We'll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
          <InputForm />
          <div className={styles.platforms}>
            <Spotify />
            <ApplePodcasts />
            <GooglePodcasts/>
            <PocketCasts/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
