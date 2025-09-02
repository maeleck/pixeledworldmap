
import type { CountryFacts } from '../types';

// Static data instead of API calls
export const countryData: CountryFacts[] = [
  {
    countryName: 'United States of America',
    capital: 'Washington, D.C.',
    population: 331893745,
    area_sq_km: 9833520,
    currency: 'United States Dollar (USD)',
    officialLanguages: ['English'],
    interestingFacts: [
      'The US has the largest economy in the world.',
      'It has no official language at the federal level.',
      'The Library of Congress is the largest library in the world.'
    ],
    youtubeVideoId: '_63sGA1M-aI'
  },
  {
    countryName: 'Canada',
    capital: 'Ottawa',
    population: 38246108,
    area_sq_km: 9984670,
    currency: 'Canadian Dollar (CAD)',
    officialLanguages: ['English', 'French'],
    interestingFacts: [
      'Canada has the longest coastline of any country in the world.',
      'It has more lakes than the rest of the world\'s lakes combined.',
      'The national animal is the beaver.'
    ],
    youtubeVideoId: '3uB-e_0_T-A'
  },
  {
    countryName: 'Japan',
    capital: 'Tokyo',
    population: 125584838,
    area_sq_km: 377975,
    currency: 'Japanese Yen (JPY)',
    officialLanguages: ['Japanese'],
    interestingFacts: [
      'Japan is made up of 6,852 islands.',
      'It has the world\'s oldest continuously running company, Kongō Gumi.',
      'Vending machines in Japan sell everything from hot noodles to fresh eggs.'
    ],
    youtubeVideoId: 'zYPhc1_k6-E'
  },
  {
    countryName: 'Brazil',
    capital: 'Brasília',
    population: 214326223,
    area_sq_km: 8515767,
    currency: 'Brazilian Real (BRL)',
    officialLanguages: ['Portuguese'],
    interestingFacts: [
      'Brazil is the largest country in South America.',
      'It is home to the Amazon Rainforest, the largest tropical rainforest in the world.',
      'The Christ the Redeemer statue in Rio de Janeiro is one of the New Seven Wonders of the World.'
    ],
    youtubeVideoId: '9fTR4_cmQ4o'
  },
  {
    countryName: 'Australia',
    capital: 'Canberra',
    population: 25921089,
    area_sq_km: 7692024,
    currency: 'Australian Dollar (AUD)',
    officialLanguages: ['English'],
    interestingFacts: [
      'Australia is the only continent that is also a country.',
      'It has over 10,000 beaches.',
      'The Great Barrier Reef is the largest coral reef system in the world.'
    ],
    youtubeVideoId: '_e47h6G2oSM'
  },
  {
    countryName: 'India',
    capital: 'New Delhi',
    population: 1407563842,
    area_sq_km: 3287263,
    currency: 'Indian Rupee (INR)',
    officialLanguages: ['Hindi', 'English'],
    interestingFacts: [
        'India is the world\'s largest democracy.',
        'The game of chess originated in India.',
        'It has the second-largest road network in the world.'
    ],
    youtubeVideoId: 'RzVvThls8s0'
  },
  {
    countryName: 'China',
    capital: 'Beijing',
    population: 1444216107,
    area_sq_km: 9596961,
    currency: 'Renminbi (Yuan; CNY)',
    officialLanguages: ['Standard Chinese'],
    interestingFacts: [
        'China is the most populous country in the world.',
        'The Great Wall of China is the largest man-made structure.',
        'Fortune cookies are not a traditional Chinese custom.'
    ],
    youtubeVideoId: 'gZ-8-wwOKvU'
  },
  {
    countryName: 'United Kingdom',
    capital: 'London',
    population: 67215293,
    area_sq_km: 242495,
    currency: 'Pound Sterling (GBP)',
    officialLanguages: ['English'],
    interestingFacts: [
      'Big Ben is the name of the bell, not the clock tower.',
      'The UK is made up of England, Scotland, Wales, and Northern Ireland.',
      'It has the shortest scheduled flight in the world, lasting only 90 seconds.'
    ],
    youtubeVideoId: 'z1g8-iRr36E'
  },
  {
    countryName: 'Germany',
    capital: 'Berlin',
    population: 83190556,
    area_sq_km: 357022,
    currency: 'Euro (EUR)',
    officialLanguages: ['German'],
    interestingFacts: [
      'Germany has over 1,500 different types of beer.',
      'The first printed book was made in Germany.',
      'There are over 20,000 castles in Germany.'
    ],
    youtubeVideoId: 'S58qC-Gv20g'
  },
  {
    countryName: 'Egypt',
    capital: 'Cairo',
    population: 102334404,
    area_sq_km: 1010408,
    currency: 'Egyptian Pound (EGP)',
    officialLanguages: ['Arabic'],
    interestingFacts: [
      'Home to the Great Pyramid of Giza, the only remaining Wonder of the Ancient World.',
      'Ancient Egyptians invented one of the earliest forms of writing (hieroglyphics).',
      'About 95% of Egypt\'s population lives along the River Nile.'
    ],
    youtubeVideoId: 'g_b9y8A0-zQ'
  },
  {
    countryName: 'South Africa',
    capital: 'Pretoria, Cape Town, Bloemfontein',
    population: 59308690,
    area_sq_km: 1221037,
    currency: 'South African Rand (ZAR)',
    officialLanguages: ['Zulu', 'Xhosa', 'Afrikaans', 'English'],
    interestingFacts: [
      'South Africa has three capital cities.',
      'It is home to Table Mountain, one of the oldest mountains in the world.',
      'The country is the world\'s largest producer of platinum.'
    ],
    youtubeVideoId: 'W7P7Yp32aK0'
  },
  {
    countryName: 'Russia',
    capital: 'Moscow',
    population: 145934462,
    area_sq_km: 17098246,
    currency: 'Russian Ruble (RUB)',
    officialLanguages: ['Russian'],
    interestingFacts: [
      'Russia is the largest country in the world by land area, spanning 11 time zones.',
      'It is home to Lake Baikal, the world\'s largest freshwater lake by volume.',
      'The Trans-Siberian Railway is the longest single railway in the world.'
    ],
    youtubeVideoId: 'd94-3-G13vo'
  },
  {
    countryName: 'Argentina',
    capital: 'Buenos Aires',
    population: 45808747,
    area_sq_km: 2780400,
    currency: 'Argentine Peso (ARS)',
    officialLanguages: ['Spanish'],
    interestingFacts: [
      'Argentina is the birthplace of the tango dance.',
      'It has the highest peak in the Americas, Aconcagua.',
      'The country is famous for its high-quality beef.'
    ],
    youtubeVideoId: 'v32Mv_9D2LU'
  },
  {
    countryName: 'Mexico',
    capital: 'Mexico City',
    population: 126014024,
    area_sq_km: 1972550,
    currency: 'Mexican Peso (MXN)',
    officialLanguages: ['Spanish'],
    interestingFacts: [
      'Chocolate, corn, and chilies were all introduced to the world by Mexico.',
      'It is home to the largest pyramid in the world, the Great Pyramid of Cholula.',
      'The Chihuahua, the world\'s smallest dog breed, is named after a Mexican state.'
    ],
    youtubeVideoId: 'UYC-nCdnR8c'
  },
  {
    countryName: 'Nigeria',
    capital: 'Abuja',
    population: 211400708,
    area_sq_km: 923768,
    currency: 'Nigerian Naira (NGN)',
    officialLanguages: ['English'],
    interestingFacts: [
      'Nigeria is the most populous country in Africa.',
      'It has the largest film industry in Africa, known as "Nollywood".',
      'The country is home to over 250 ethnic groups.'
    ],
    youtubeVideoId: 'p0KzaStq_2M'
  },
  {
    countryName: 'Sweden',
    capital: 'Stockholm',
    population: 10452326,
    area_sq_km: 450295,
    currency: 'Swedish Krona (SEK)',
    officialLanguages: ['Swedish'],
    interestingFacts: [
      'Sweden is the third-largest country in the European Union by area.',
      'It is one of the world\'s most generous countries for foreign aid.',
      'The country has a "right to roam", allowing public access to nature.'
    ],
    youtubeVideoId: 'Kyj7kS_8L-M'
  },
  {
    countryName: 'Indonesia',
    capital: 'Jakarta',
    population: 273753191,
    area_sq_km: 1904569,
    currency: 'Indonesian Rupiah (IDR)',
    officialLanguages: ['Indonesian'],
    interestingFacts: [
      'Indonesia is the world\'s largest island country, with over 17,000 islands.',
      'It is home to the Komodo dragon, the largest lizard in the world.',
      'The country has the largest Muslim population in the world.'
    ],
    youtubeVideoId: 'h3-GsGL_t-s'
  },
  {
    countryName: 'New Zealand',
    capital: 'Wellington',
    population: 5129727,
    area_sq_km: 268021,
    currency: 'New Zealand Dollar (NZD)',
    officialLanguages: ['English', 'Māori'],
    interestingFacts: [
      'More people live in Auckland than in the entire South Island.',
      'The "Lord of the Rings" and "The Hobbit" trilogies were filmed here.',
      'It was the first country to give women the right to vote in 1893.'
    ],
    youtubeVideoId: '1z40p_aj_2Y'
  }
];

export function getCountryFacts(countryName: string): Promise<CountryFacts> {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const data = countryData.find(c => c.countryName === countryName);
      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Information for ${countryName} is not available.`));
      }
    }, 500); // 0.5 second delay
  });
}
