import React, { useState, useEffect } from 'react';
import './GuestsSpeakers.css';

const GuestsSpeakers = () => {
  // ========================================
  // SECTION CONFIGURATION
  // ========================================
  const sectionConfig = {
    subtitle: "Voices That Inspire",
    showSubtitle: true,
  };

  // ========================================
  // SPEAKER DATA
  // ========================================
  const speakers = [
    {
      id: 1,
      name: "GUEST NAME", 
      designation: "DESIGNATION",
      image: "/images/speakers/speaker1.png" 
    },
    // ... keep other speakers the same for now
    { id: 2, name: "GUEST NAME", designation: "DESIGNATION", image: "/images/speakers/speaker2.png" },
    { id: 3, name: "GUEST NAME", designation: "DESIGNATION", image: "/images/speakers/speaker3.png" },
    { id: 4, name: "GUEST NAME", designation: "DESIGNATION", image: "/images/speakers/speaker4.png" },
  ];

  // ========================================
  // CAROUSEL STATE & LOGIC (Unchanged)
  // ========================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const getCircularSpeakers = () => {
    if (speakers.length <= cardsPerView) return speakers;
    return [...speakers, ...speakers, ...speakers];
  };

  const circularSpeakers = getCircularSpeakers();
  const actualStartIndex = speakers.length;

  const getGapSize = () => {
    const width = window.innerWidth;
    if (width <= 480) return 40;
    if (width <= 768) return 50;
    if (width <= 1024) return 60;
    if (width <= 1200) return 80;
    return 130;
  };

  useEffect(() => {
    const calculateLayout = () => {
      const width = window.innerWidth;
      let cards = 3;
      let gapSize = 130; 

      if (width <= 768) { cards = 1; gapSize = 50; }
      else if (width <= 1024) { cards = 2; gapSize = 60; }
      else if (width <= 1200) { cards = 3; gapSize = 80; }
      else { cards = 3; gapSize = 130; }

      setCardsPerView(cards);
      const wrapper = document.querySelector('.cards-wrapper');
      if (wrapper) {
        const wrapperWidth = wrapper.offsetWidth;
        const horizontalPadding = 100; 
        const totalGap = gapSize * (cards - 1);
        const cardW = (wrapperWidth - horizontalPadding - totalGap) / cards;
        setCardWidth(cardW);
      }
    };
    calculateLayout();
    setCurrentIndex(actualStartIndex);
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;
    const checkPosition = () => {
      if (currentIndex <= 0) {
        setIsTransitioning(false);
        setCurrentIndex(actualStartIndex);
      } else if (currentIndex >= actualStartIndex + speakers.length) {
        setIsTransitioning(false);
        setCurrentIndex(actualStartIndex);
      }
    };
    const timer = setTimeout(checkPosition, 650);
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, actualStartIndex, speakers.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const goToPrevious = () => { setIsTransitioning(true); setCurrentIndex((prevIndex) => prevIndex - 1); };
  const goToNext = () => { setIsTransitioning(true); setCurrentIndex((prevIndex) => prevIndex + 1); };

  return (
    <section className="guests-speakers-section">
      <div className="background-overlay"></div>
      <div className="section-container">
        <div className="section-title">
          {sectionConfig.showSubtitle && (
            <div className="subtitle-line">
              <span className="line"></span>
              <span className="subtitle-text">{sectionConfig.subtitle}</span>
            </div>
          )}
          <h2 className="title-white">GUESTS &</h2>
          <h2 className="title-gold">SPEAKERS</h2>
        </div>

        <div className="carousel-container">
          <button className="nav-arrow left-arrow" onClick={goToPrevious}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="cards-wrapper">
            <div
              className="cards-track"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + getGapSize())}px)`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {circularSpeakers.map((speaker, index) => (
                <div
                  key={`${speaker.id}-${index}`}
                  className="card-item"
                  style={{ width: cardWidth, flexBasis: cardWidth }}
                >
                  <div className="playing-card">
                    <div className="card-inner">
                      
                      {/* LAYER 1: The complete card template background */}
                      {/* ASSUMPTION: This image now has the beige card, symbols, black frame, AND checkered pattern inside it. */}
                      <img className="card-template-bg" src="/images/card-template.png" alt="" />
                      
                      {/* LAYER 2: The Speaker Photo, positioned over the frame area */}
                      <div className="speaker-photo-layer">
                        <img src={speaker.image} alt={speaker.name} />
                      </div>

                      {/* LAYER 3: Text Labels */}
                      <div className="designation-text">{speaker.designation}</div>
                      <div className="guest-name-text">{speaker.name}</div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-arrow right-arrow" onClick={goToNext}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuestsSpeakers;