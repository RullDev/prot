import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-blur">
      <div className="container text-center py-4">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/rlzyy" target="_blank" rel="noopener noreferrer" className="footer-link">
            Rulzz
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
