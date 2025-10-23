import React, { useState, useEffect } from 'react';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    // Clean up the listener when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div
      className={`to-top ${isVisible ? 'show' : ''}`}
      id="toTop"
      onClick={scrollToTop} // Use onClick instead of addEventListener
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default ToTopButton;