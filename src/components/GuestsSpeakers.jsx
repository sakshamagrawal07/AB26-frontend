import React, { useState, useEffect } from 'react';
import './GuestsSpeakers.css';

const GuestsSpeakers = () => {
  // ========================================
  // SECTION CONFIGURATION
  // ========================================
  const sectionConfig = {
    subtitle: "Voices That Inspire",
    showSubtitle: true, // Set to false to hide the subtitle
  };

  // ========================================
  // SPEAKER DATA - EASY TO ADD/REMOVE
  // ========================================
  const speakers = [
    {
      id: 1,
      name: "GUEST NAME",
      designation: "DESIGNATION",
      image: "/images/speakers/speaker1.png"
    },
    {
      id: 2,
      name: "GUEST NAME",
      designation: "DESIGNATION",
      image: "/images/speakers/speaker2.png"
    },
    {
      id: 3,
      name: "GUEST NAME",
      designation: "DESIGNATION",
      image: "/images/speakers/speaker3.png"
    },
    {
      id: 4,
      name: "GUEST NAME",
      designation: "DESIGNATION",
      image: "/images/speakers/speaker4.png"
    },
  ];

  // ========================================
  // CAROUSEL STATE
  // ========================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create circular array by duplicating cards for seamless loop
  const getCircularSpeakers = () => {
    if (speakers.length <= cardsPerView) return speakers;
    return [...speakers, ...speakers, ...speakers];
  };

  const circularSpeakers = getCircularSpeakers();
  const actualStartIndex = speakers.length;

  // Get responsive gap size
  const getGapSize = () => {
    const width = window.innerWidth;
    if (width <= 768) return 20;
    if (width <= 1024) return 40;
    return 40;
  };

  // Calculate responsive cards per view and card width
  useEffect(() => {
    const calculateLayout = () => {
      const width = window.innerWidth;
      let cards = 3;
      let gapSize = 40;

      if (width <= 768) {
        cards = 1;
        gapSize = 20;
      } else if (width <= 1024) {
        cards = 2;
        gapSize = 40;
      }

      setCardsPerView(cards);

      const wrapper = document.querySelector('.cards-wrapper');
      if (wrapper) {
        const wrapperWidth = wrapper.offsetWidth;
        const totalGap = gapSize * (cards - 1);
        const cardW = (wrapperWidth - totalGap) / cards;
        setCardWidth(cardW);
      }
    };

    calculateLayout();
    setCurrentIndex(actualStartIndex);

    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  // Handle circular wrap-around
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

  // Re-enable transition after instant reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Navigation handlers
  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const isPrevDisabled = false;
  const isNextDisabled = false;

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
          <button
            className="nav-arrow left-arrow"
            onClick={goToPrevious}
            disabled={isPrevDisabled}
            aria-label="Previous speakers"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
                      <div className="card-symbol top">
                        <span className="letter">M</span>
                        <span className="diamond">♦</span>
                      </div>

                      <div className="designation-text">{speaker.designation}</div>
                      <div className="diamond-pattern"></div>

                      <div className="speaker-photo">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x600/8b7355/ffffff?text=Speaker+Photo';
                          }}
                        />
                      </div>

                      <div className="guest-name-text">{speaker.name}</div>

                      <div className="card-symbol bottom">
                        <span className="letter">M</span>
                        <span className="diamond">♦</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-arrow right-arrow"
            onClick={goToNext}
            disabled={isNextDisabled}
            aria-label="Next speakers"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuestsSpeakers;