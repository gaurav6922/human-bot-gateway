import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const interaction = {
      moved: false,
      clicked: false,
      typed: false,
      scrolled: false,
    };

    const markMoved = () => (interaction.moved = true);
    const markClicked = () => (interaction.clicked = true);
    const markTyped = () => (interaction.typed = true);
    const markScrolled = () => (interaction.scrolled = true);

    document.addEventListener('mousemove', markMoved);
    document.addEventListener('click', markClicked);
    document.addEventListener('keydown', markTyped);
    document.addEventListener('scroll', markScrolled);

    const waitTime = 5000; // 5 seconds

    const timer = setTimeout(() => {
      const isHuman =
        interaction.moved || interaction.clicked || interaction.typed || interaction.scrolled;

      // Log activity
      fetch('https://human-bot-gateway-backend.onrender.com/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isHuman,
          metrics: interaction,
          userAgent: navigator.userAgent,
        }),
      });

      
      if (isHuman) {
        alert("✅ Verified! You are human.");
        // window.location.href = ''; // Optional redirect for humans
      } else {
        alert("⚠️ Bot detected.");
        // window.location.href = ''; // Optional redirect for bots
      }
    }, waitTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1>Verifying your browser...</h1>
      <p>Please wait a moment...</p>
    </div>
  );
}

export default App;
