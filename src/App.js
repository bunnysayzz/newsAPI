// App.js

import React from 'react';
import News from './components/NewsApp/News';
import styles from './App.module.css';
import logo from '../src/components/news24.png';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logo} alt="News24 Logo" className={styles.logo} />
          <h1 className={styles['news-heading']}>NEWS24</h1> 
        </div>
      </header>
      <div className={styles.container}>
        <News />
      </div>
    </div>
  );
}

export default App;