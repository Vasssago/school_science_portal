import React from 'react';

const Gallery = () => {
  return (
    <>
      <h2 id="gallery" style={{ color: 'var(--primary-dark)', margin: '2rem 0 1rem', textAlign: 'center' }}>Галерея комплекса</h2>
      <div className="gallery">
        <div className="gallery-item">
          <i className="fas fa-school"></i>
        </div>
        <div className="gallery-item">
          <i className="fas fa-book"></i>
        </div>
        <div className="gallery-item">
          <i className="fas fa-flask"></i>
        </div>
        <div className="gallery-item">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <div className="gallery-item">
          <i className="fas fa-child"></i>
        </div>
        <div className="gallery-item">
          <i className="fas fa-graduation-cap"></i>
        </div>
      </div>
    </>
  );
};

export default Gallery;