import React, { useState, useEffect } from 'react';


const Contact = () => {
  const teamMembers = [
    { name: "Krish Batra", role: "Data Management & Backend Development" },
    { name: "", role: "UI UX & Frontend Development" },
    { name: "Arpit Sharma", role: "Research" },
    { name: "Julia Gimmel", role: "UX Designer" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const adjustedIndex = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(adjustedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1);
      } else {
        updateCarousel(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const getCarddClass = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return "cardd center";
    if (offset === 1) return "cardd right-1";
    if (offset === 2) return "cardd right-2";
    if (offset === teamMembers.length - 1) return "cardd left-1";
    if (offset === teamMembers.length - 2) return "cardd left-2";
    return "cardd hidden";
  };

  const images = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <div className="contact-container">
      <div className="heading-info-contact">
      <h1 className="about-title">OUR DEVELOPERS</h1>
      </div>

      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>‹</button>
        <div className="carousel-track">
          {images.map((image, index) => (
            <div 
              key={index}
              className={getCarddClass(index)}
              onClick={() => updateCarousel(index)}
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].screenX)}
              onTouchEnd={(e) => {
                setTouchEndX(e.changedTouches[0].screenX);
                handleSwipe();
              }}
            >
              <img src={image} alt={`Team Member ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>›</button>
      </div>

      <div className="member-info">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>

      <div className="dots">
        {teamMembers.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;


