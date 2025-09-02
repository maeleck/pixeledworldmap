
import React, { useState, useEffect } from 'react';
import type { CountryFacts } from '../types.ts';
import { PopulationIcon, AreaIcon, CurrencyIcon, LanguageIcon, FactIcon, CloseIcon, CapitalIcon } from './icons.tsx';

interface CountryInfoPanelProps {
  isVisible: boolean;
  isLoading: boolean;
  countryFacts: CountryFacts | null;
  error: string | null;
  onClose: () => void;
}

const SkeletonLoader: React.FC = () => (
    <div className="animate-pulse p-6 space-y-6 font-pixel">
      <div className="h-8 bg-gray-600 rounded w-3/4"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-700 rounded w-full"></div>
        <div className="h-6 bg-gray-700 rounded w-5/6"></div>
        <div className="h-6 bg-gray-700 rounded w-full"></div>
        <div className="h-6 bg-gray-700 rounded w-4/6"></div>
      </div>
      <div className="h-6 bg-gray-600 rounded w-1/2 mt-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
);


const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: React.ReactNode; }> = ({ icon, label, value }) => (
    <div className="flex items-start space-x-4 py-3 border-b border-gray-700">
        <div className="flex-shrink-0 w-6 h-6 text-indigo-400">{icon}</div>
        <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
            <p className="text-base font-semibold text-white">{value}</p>
        </div>
    </div>
);

export const CountryInfoPanel: React.FC<CountryInfoPanelProps> = ({
  isVisible,
  isLoading,
  countryFacts,
  error,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'vlog'>('stats');

  useEffect(() => {
    if (countryFacts) {
      setActiveTab('stats');
    }
  }, [countryFacts]);
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };
  
  const TabButton: React.FC<{ isActive: boolean; onClick: () => void; children: React.ReactNode }> = ({ isActive, onClick, children }) => (
    <button
      onClick={onClick}
      className={`font-pixel py-2 px-4 text-sm font-medium rounded-t-lg transition-colors duration-200 focus:outline-none ${
        isActive
          ? 'bg-gray-800 border-b-2 border-indigo-400 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
      }`}
    >
      {children}
    </button>
  );

  return (
    <aside className={`absolute top-0 right-0 h-full w-full max-w-md bg-gray-800/80 backdrop-blur-md shadow-2xl transition-transform duration-500 ease-in-out transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="relative h-full overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20" aria-label="Close panel">
            <CloseIcon />
        </button>

        <div className="p-6 pt-12">
            {isLoading && <SkeletonLoader />}
            
            {error && !isLoading && (
                <div className="text-center p-8 font-pixel">
                    <h3 className="text-lg font-semibold text-red-400">An Error Occurred</h3>
                    <p className="text-gray-300 mt-2 leading-relaxed">{error}</p>
                </div>
            )}
            
            {!isLoading && !error && countryFacts && (
                <div className="font-pixel">
                    <h2 className="text-2xl font-bold text-indigo-400 mb-4">{countryFacts.countryName}</h2>
                    
                    <div className="border-b border-gray-700 mb-4">
                      <nav className="-mb-px flex space-x-2" aria-label="Tabs">
                        <TabButton isActive={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>
                          Statistics
                        </TabButton>
                        <TabButton isActive={activeTab === 'vlog'} onClick={() => setActiveTab('vlog')}>
                          Travel Vlogs
                        </TabButton>
                      </nav>
                    </div>

                    {activeTab === 'stats' && (
                      <div className="animate-fade-in">
                        <div className="space-y-2">
                            <InfoRow icon={<PopulationIcon />} label="Population" value={formatNumber(countryFacts.population)} />
                            <InfoRow icon={<AreaIcon />} label="Area (km²)" value={`${formatNumber(countryFacts.area_sq_km)}`} />
                            <InfoRow icon={<CapitalIcon />} label="Capital" value={countryFacts.capital} />
                            <InfoRow icon={<CurrencyIcon />} label="Currency" value={countryFacts.currency} />
                            <InfoRow icon={<LanguageIcon />} label="Official Languages" value={countryFacts.officialLanguages.join(', ')} />
                        </div>

                        <h3 className="text-xl font-bold text-indigo-400 mt-8 mb-4">Interesting Facts</h3>
                        <ul className="space-y-4">
                            {countryFacts.interestingFacts.map((fact, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 text-indigo-400 mt-1"><FactIcon /></div>
                                    <span className="text-gray-300 leading-relaxed">{fact}</span>
                                </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'vlog' && (
                       <div className="animate-fade-in">
                         {countryFacts.youtubeVideoId ? (
                             <>
                                 <h3 className="text-xl font-bold text-indigo-400 mb-4">Travel Vlog</h3>
                                 <div className="aspect-video-container rounded-lg overflow-hidden">
                                     <iframe
                                         src={`https://www.youtube.com/embed/${countryFacts.youtubeVideoId}`}
                                         title={`YouTube video player for ${countryFacts.countryName}`}
                                         frameBorder="0"
                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                         allowFullScreen
                                     ></iframe>
                                 </div>
                             </>
                         ) : (
                            <div className="text-center p-8">
                                <p className="text-gray-400">No travel vlog available for this country.</p>
                            </div>
                         )}
                       </div>
                    )}
                </div>
            )}

            {!isLoading && !error && !countryFacts && (
                <div className="text-center p-8 h-full flex flex-col justify-center items-center font-pixel">
                    <h3 className="text-xl font-semibold text-gray-300">Explore the World</h3>
                    <p className="text-gray-400 mt-2 leading-relaxed">Select a country on the globe to discover fascinating facts and information.</p>
                </div>
            )}
        </div>
      </div>
    </aside>
  );
};
