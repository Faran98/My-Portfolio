import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Loader from './components/loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`h-screen ${loading ? 'bg-black' : 'bg-nav-white dark:bg-black'}`}>
      {loading ? (
        <Loader className="bg-black"/>
      ) : (
        <>
          <Header />
          <main>
            <Home />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
