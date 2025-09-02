
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CountryInfoPanel } from './components/CountryInfoPanel.tsx';
import { getCountryFacts } from './services/geminiService.ts';
import { PinIcon } from './components/icons.tsx';
import { WorldMapSvg } from './components/WorldMapSvg.tsx';

const App = () => {
  const markers = [
    { countryName: 'United States of America', top: '42%', left: '25%' },
    { countryName: 'Brazil', top: '68%', left: '35%' },
    { countryName: 'Japan', top: '31%', left: '90%' },
    { countryName: 'Australia', top: '71%', left: '85%' },
    { countryName: 'India', top: '48%', left: '70%' },
    { countryName: 'China', top: '36%', left: '75%' },
    { countryName: 'Canada', top: '30%', left: '30%' },
    { countryName: 'United Kingdom', top: '35%', left: '48%' },
    { countryName: 'Germany', top: '38%', left: '55%' },
    { countryName: 'Egypt', top: '48%', left: '58%' },
    { countryName: 'South Africa', top: '80%', left: '57%' },
    { countryName: 'Russia', top: '30%', left: '65%' },
    { countryName: 'Argentina', top: '85%', left: '32%' },
    { countryName: 'Mexico', top: '50%', left: '20%' },
    { countryName: 'Nigeria', top: '55%', left: '53%' },
    { countryName: 'Sweden', top: '28%', left: '55%' },
    { countryName: 'Indonesia', top: '65%', left: '78%' },
    { countryName: 'New Zealand', top: '85%', left: '93%' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mapViewportRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 });

  useEffect(() => {
    const viewport = mapViewportRef.current;
    if (viewport) {
      const { scrollWidth, scrollHeight, clientWidth, clientHeight } = viewport;
      viewport.scrollLeft = (scrollWidth - clientWidth) / 2;
      viewport.scrollTop = (scrollHeight - clientHeight) / 2;
    }
  }, []);

  const handlePanStart = useCallback((clientX, clientY) => {
    const viewport = mapViewportRef.current;
    if (!viewport) return;
    isDraggingRef.current = true;
    startPosRef.current = {
      startX: clientX,
      startY: clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
    };
    viewport.style.cursor = 'grabbing';
    viewport.style.userSelect = 'none';
  }, []);

  const handlePanMove = useCallback((clientX, clientY) => {
    if (!isDraggingRef.current) return;
    const viewport = mapViewportRef.current;
    if (!viewport) return;
    
    const dx = clientX - startPosRef.current.startX;
    const dy = clientY - startPosRef.current.startY;

    viewport.scrollLeft = startPosRef.current.scrollLeft - dx;
    viewport.scrollTop = startPosRef.current.scrollTop - dy;
  }, []);

  const handlePanEnd = useCallback(() => {
    isDraggingRef.current = false;
    const viewport = mapViewportRef.current;
    if (viewport) {
      viewport.style.cursor = 'grab';
      viewport.style.userSelect = 'auto';
    }
  }, []);

  const handleMarkerClick = useCallback(async (countryName) => {
    if (selectedCountry?.countryName === countryName && isPanelVisible) {
      setIsPanelVisible(false);
      return;
    }
    
    setIsPanelVisible(true);
    setIsLoading(true);
    setError(null);
    setSelectedCountry(null);

    try {
      const facts = await getCountryFacts(countryName);
      setSelectedCountry(facts);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCountry, isPanelVisible]);

  const handleClosePanel = useCallback(() => {
    setIsPanelVisible(false);
  }, []);

  return (
    <main className="relative w-screen h-screen bg-blue-900 text-white overflow-hidden flex">
      <div className="flex-grow h-full relative">
        <header className="absolute top-0 left-0 text-center md:text-left p-4 md:p-8 z-20 pointer-events-none">
          <h1 className="font-pixel text-2xl md:text-3xl font-bold text-white tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
            The Pixeled World Map
          </h1>
          <p className="font-pixel text-gray-300 mt-2 text-xs md:text-sm" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>
            Click a pin to learn about a country.
          </p>
        </header>

        <div
            ref={mapViewportRef}
            className="absolute inset-0 overflow-hidden cursor-grab"
            style={{ touchAction: 'none' }}
            onMouseDown={(e) => handlePanStart(e.clientX, e.clientY)}
            onMouseMove={(e) => handlePanMove(e.clientX, e.clientY)}
            onMouseUp={handlePanEnd}
            onMouseLeave={handlePanEnd}
            onTouchStart={(e) => handlePanStart(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => handlePanMove(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={handlePanEnd}
        >
            <div className="relative" style={{ width: '150%', height: '150%'}}>
                 <WorldMapSvg />

                {markers.map((marker) => (
                  <button
                    key={marker.countryName}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onClick={() => handleMarkerClick(marker.countryName)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-10 group"
                    style={{ top: marker.top, left: marker.left }}
                    aria-label={`Show facts for ${marker.countryName}`}
                  >
                    <span className="absolute inset-0 bg-red-500 rounded-full animate-pulse-marker group-hover:animate-none" />
                    <PinIcon />
                  </button>
                ))}
            </div>
        </div>
      </div>

      <CountryInfoPanel
        isVisible={isPanelVisible}
        isLoading={isLoading}
        countryFacts={selectedCountry}
        error={error}
        onClose={handleClosePanel}
      />
    </main>
  );
};

export default App;
