import React, { useEffect, useState } from 'react';
import Imagee from '../public/assets/irul.png'

const AboutSection = () => {
const [isVisible, setIsVisible] = useState(false);

  // Memeriksa apakah elemen berada dalam viewport
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-heading');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Mengecek visibilitas saat pertama kali load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-5" id="about">
      <div className="container">

        <div className="mb-4" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Imagee}
            alt="Nanay"
            className="img-fluid shadow"
            style={{
              width: "100px",  // Ukuran kecil
              height: "100px", // Ukuran kecil
              objectFit: "cover", // Menjaga proporsi gambar
              borderRadius: "0", // Menghilangkan bentuk bulat
            }}
          />
        </div>

<h2 id="about-heading"
  style={{ 
    textAlign: "center", 
    fontSize: "1.875rem", // 3xl
    fontWeight: "bold", 
    color: "white",
    opacity: isVisible ? 1 : 0, // Fade in
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 1s ease, transform 1s ease'
  }}
>
  About <span style={{ color: "#00adb5" }}>Me</span>
</h2>

        <p className="text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'opacity 1s ease, transform 1.5s ease' }}>Let me introduce myself, I am Irul, I am an (Fake) developer who makes WhatsApp bot projects, etc.<br/>This project is just a copy-paste from me, please don't insult me.</p>
      </div>
      <a className="cs-down-wrapper">
          <a className="cs-down"></a>
        </a>
    </section>
  );
}

export default AboutSection;
