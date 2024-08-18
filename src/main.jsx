import React, { useState, useEffect } from 'react';
import Image from '../public/assets/logo.jpg'


const MainSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="text-center py-5" id="main">
      <div className="container">
        <img src={Image} alt="Profile" className="profile-img rounded-circle" />
        <h5><strong>Irullll</strong><span class="fas fa-circle-check verified"></span></h5>
                <p><span class="fas fa-map-marker-alt"></span>&nbsp;Trenggalek, Jawa Timur, Indonesia</p>
                <p class="opacity-75">“Dreamer, Thinker, Doer.”</p>
<div class="d-flex flex-wrap justify-content-center my-4 align-items-center py">
                    <ul class="text-center nav col-md justify-content-center list-unstyled d-flex">
                        
<li className="mx-2">
  <a className="btn btn-outline-light btn-floating m-1 social-btn" href="https://github.com/rlzyy">
    <i className="fab fa-github">
    </i>
  </a>
</li>
<li className="mx-2">
  <a className="btn btn-outline-light btn-floating m-1 social-btn" href="https://t.me/rulskeyy">
    <i className="fab fa-telegram">
      </i>
  </a>
</li>
                      <li className="mx-2">
                        <a className="btn btn-outline-light btn-floating m-1 social-btn" href="https://trakteer.id/rlvyn">
                          <i className="fab fa-solid fa-wallet">
                            </i>
                        </a>
                      </li>
                          <li className="mx-2">
                            <a className="btn btn-outline-light btn-floating m-1 social-btn" href="https://wa.me/message/BULDAAJKYYQGH1">
                              <i className="fab fa-solid fa-user-secret">
                                </i>
                        </a>
                      </li>

                    </ul>
</div>
        {/* Spotify Section */}
        <div className="spotify-section mt-5">
          <h3>What I'm Listening To</h3>
          {loading ? (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '380px' }}>
    <div className="spinner-border text-primary pulse" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
          ) : (
          <iframe
            src="https://open.spotify.com/embed/playlist/1K1Sz1NldB7G8Bibs5GZuI?si=pA-HRONzTYGdXd5MJimTrw"
            width="300" 
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify Playlist"
          ></iframe>
  )}
        </div>
      </div>
    </section>
  );
}

export default MainSection;
