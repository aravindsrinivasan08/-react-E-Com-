import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.postimg.cc/Sx924YLT/pexels-kish-1488463.jpg",  // Replace with your image URLs
    "https://i.postimg.cc/6p6Wj7j4/pexels-shattha-pilabut-38930-135620.jpg",
    "https://i.postimg.cc/2StsQ3PD/pexels-bohlemedia-1884581.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div style={styles.sliderContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.sliderImage}
      />
      <div style={styles.overlay}>
      <h1 style={styles.title}> WELCOME TO SHOPSPHERE! 👋</h1>
        <p style={styles.subtitle}>FLAT 50% OFF.</p>
        <button style={styles.button}>LATEST COLLECTION ➡️</button>
      </div>
    </div>
  );
};






const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out',  // Smooth transition effect for image sliding
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    zIndex: '2',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white', // Set the color to black
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    
  },
};

export default Slider;
