import React, { useEffect } from 'react';

const AntiInspect = () => {
  const isDebug = true;

  const gEr = () => {
    const f = Array.from(document.querySelectorAll('script')).some((s) =>
      s.src.includes('eruda')
    );
    if (f) {
      alert('Debugger still detected!');
      if (window.confirm('Check again?')) {
        gEr();
      } else {
        gEr();
      }
    }
  };

  useEffect(() => {
    if (isDebug) {
      const idi = setInterval(() => {
        const f = Array.from(document.querySelectorAll('script')).some((s) =>
          s.src.includes('eruda')
        );
        if (f) {
          alert('Debugger detected!');
          clearInterval(idi); // Stop the interval after detecting the debugger
          if (window.confirm('Check again?')) {
            gEr();
          }
        }
      }, 5000); // Check every 5 seconds

      // Cleanup the interval on component unmount
      return () => clearInterval(idi);
    }
  }, [isDebug]);

  return null; // No need to render anything for this component
};

export default AntiInspect;
