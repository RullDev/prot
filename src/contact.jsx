import React, { useEffect } from 'react';
import './App.css'; // Pastikan kita mengimpor file CSS untuk styling animasi

const Contact = () => {
  useEffect(() => {
    const card = document.querySelector('.card-contact');
    card.classList.add('animate-card');
  }, []);
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>

        <div className="card-contact animate-card">
          <h3 className="card-contact-title">Get In Touch</h3>
          <p className="card-contact-content">
            Feel free to reach out to me via the following platforms:
          </p>

          <ul className="contact-list">
            <li>
              <strong>Email:</strong> support@irull.com
            </li>
            <li>
              <strong>Phone:</strong> +62 838-9998-4688
            </li>
            <li>
            </li>
          </ul>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
