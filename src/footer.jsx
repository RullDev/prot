import React from 'react';

const Footer = () => {
  return (
    <footer class="text-center bg-dark text-white py-4">
            <div class="container">
                <p>&copy; {new Date().getFullYear()} <a href="https://github.com/rlzyy">Rulzz</a> All Rights Reserved.</p>
            </div>
        </footer>
    )
};

export default Footer