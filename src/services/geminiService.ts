
import type { CountryFacts } from '../types.ts';

// Static data instead of API calls
const countryData: CountryFacts[] = [
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
    population: 25788215,
    area_sq_km: 7692024,
    currency: 'Australian Dollar (AUD)',
    officialLanguages: ['English'],
    interestingFacts: [
        'Australia is the only continent that is also a country.',
        'It has over 10,000 beaches.',
        'The Great Barrier Reef is the world\'s largest coral reef system.'
    ],
    youtubeVideoId: '7T_n_21i4mI'
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
        'The game of chess was invented in India.',
        'It has the second-largest road network in the world.'
    ],
    youtubeVideoId: '4DEaTqSLo1o'
  },
  {
    countryName: 'China',
    capital: 'Beijing',
    population: 1444216107,
    area_sq_km: 9596961,
    currency: 'Renminbi (Yuan)',
    officialLanguages: ['Standard Chinese'],
    interestingFacts: [
        'China is the most populous country in the world.',
        'It is the third-largest country by land area.',
        'The Great Wall of China is the largest man-made structure in the world.'
    ],
    youtubeVideoId: 'ot1pF6ubz9A'
  },
  {
    countryName: 'United Kingdom',
    capital: 'London',
    population: 67215293,
    area_sq_km: 242495,
    currency: 'Pound Sterling (GBP)',
    officialLanguages: ['English'],
    interestingFacts: [
        'The United Kingdom is made up of four countries: England, Scotland, Wales, and Northern Ireland.',
        'The Industrial Revolution began in the United Kingdom.',
        'London is home to the oldest underground railway network in the world.'
    ],
    youtubeVideoId: 'ns9_g_r5E4U'
  },
  {
    countryName: 'Germany',
    capital: 'Berlin',
    population: 83900473,
    area_sq_km: 357022,
    currency: 'Euro (EUR)',
    officialLanguages: ['German'],
    interestingFacts: [
        'Germany is the most populous member state of the European Union.',
        'It is the second-most popular immigration destination in the world, after the United States.',
        'The cuckoo clock was invented in Germany.'
    ],
    youtubeVideoId: 'XfsoSft3y4E'
  },
    {
    countryName: 'Egypt',
    capital: 'Cairo',
    population: 102334404,
    area_sq_km: 1002450,
    currency: 'Egyptian Pound (EGP)',
    officialLanguages: ['Arabic'],
    interestingFacts: [
        'Egypt is home to the Great Pyramid of Giza, the oldest of the Seven Wonders of the Ancient World.',
        'The ancient Egyptians invented the 365-day calendar.',
        'The Nile is the longest river in the world.'
    ],
    youtubeVideoId: 'r_L-JqK25wQ'
  },
  {
    countryName: 'South Africa',
    capital: 'Pretoria (executive), Bloemfontein (judicial), Cape Town (legislative)',
    population: 59308690,
    area_sq_km: 1221037,
    currency: 'South African Rand (ZAR)',
    officialLanguages: ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Northern Sotho', 'Tswana', 'Southern Sotho', 'Tsonga', 'Swazi', 'Venda', 'Southern Ndebele'],
    interestingFacts: [
        'South Africa has three capital cities.',
        'It is the only country in the world to have hosted the soccer, cricket and rugby World Cups.',
        'It is home to the world\'s largest bird, the ostrich.'
    ],
    youtubeVideoId: 'E2DwB__S_s4'
  },
  {
    countryName: 'Russia',
    capital: 'Moscow',
    population: 145934462,
    area_sq_km: 17098246,
    currency: 'Russian Ruble (RUB)',
    officialLanguages: ['Russian'],
    interestingFacts: [
        'Russia is the largest country in the world by land area.',
        'It spans 11 time zones.',
        'Lake Baikal in Siberia is the world\'s largest and deepest freshwater lake.'
    ],
    youtubeVideoId: 'D3q7g2MvT34'
  },
    {
    countryName: 'Argentina',
    capital: 'Buenos Aires',
    population: 45376763,
    area_sq_km: 2780400,
    currency: 'Argentine Peso (ARS)',
    officialLanguages: ['Spanish'],
    interestingFacts: [
        'Argentina is the eighth-largest country in the world.',
        'It is the birthplace of the tango.',
        'The Andes Mountains, the longest mountain range in the world, run through Argentina.'
    ],
    youtubeVideoId: 'u4k7yDimG8g'
  },
  {
    countryName: 'Mexico',
    capital: 'Mexico City',
    population: 128932753,
    area_sq_km: 1972550,
    currency: 'Mexican Peso (MXN)',
    officialLanguages: ['Spanish'],
    interestingFacts: [
        'Mexico is the most populous Spanish-speaking country in the world.',
        'It is home to the ancient civilizations of the Maya and Aztec.',
        'Chocolate, corn, and chilies were all introduced to the world by Mexico.'
    ],
    youtubeVideoId: 'uU5y4_a5i_s'
  },
  {
    countryName: 'Nigeria',
    capital: 'Abuja',
    population: 206139589,
    area_sq_km: 923768,
    currency: 'Nigerian Naira (NGN)',
    officialLanguages: ['English'],
    interestingFacts: [
        'Nigeria is the most populous country in Africa.',
        'It is home to Nollywood, the second-largest film industry in the world.',
        'The country is named after the Niger River.'
    ],
    youtubeVideoId: 'smwn3wGkQfk'
  },
  {
    countryName: 'Sweden',
    capital: 'Stockholm',
    population: 10452326,
    area_sq_km: 450295,
    currency: 'Swedish Krona (SEK)',
    officialLanguages: ['Swedish'],
    interestingFacts: [
        'Sweden is one of the most sparsely populated countries in Europe.',
        'It is the birthplace of IKEA and Spotify.',
        'The country has a "right to roam", allowing people to freely hike through most of the countryside.'
    ],
    youtubeVideoId: 'Udda0b-b5Y0'
  },
  {
    countryName: 'Indonesia',
    capital: 'Jakarta',
    population: 273523615,
    area_sq_km: 1904569,
    currency: 'Indonesian Rupiah (IDR)',
    officialLanguages: ['Indonesian'],
    interestingFacts: [
        'Indonesia is the largest archipelago in the world, with over 17,000 islands.',
        'It is home to the Komodo dragon, the largest lizard in the world.',
        'The country has the second-longest coastline in the world.'
    ],
    youtubeVideoId: 'l1r_yCNBq1g'
  },
  {
    countryName: 'New Zealand',
    capital: 'Wellington',
    population: 5122600,
    area_sq_km: 268021,
    currency: 'New Zealand Dollar (NZD)',
    officialLanguages: ['English', 'Māori'],
    interestingFacts: [
        'New Zealand was the first country in the world to give women the right to vote.',
        'It is home to more sheep than people.',
        'The Lord of the Rings trilogy was filmed entirely in New Zealand.'
    ],
    youtubeVideoId: 'H_4Q262-E9g'
  }
];

// In a real app, this would be a Gemini API call.
// For this demo, we'll simulate the API call by finding the data.
export const getCountryFacts = async (countryName: string): Promise<CountryFacts> => {
    console.log(`Fetching facts for: ${countryName}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = countryData.find(c => c.countryName === countryName);
            if (data) {
                console.log('Found facts:', data);
                resolve(data);
            } else {
                console.error(`No facts found for ${countryName}`);
                reject(new Error(`Could not find information for ${countryName}. Please try another country.`));
            }
        }, 500 + Math.random() * 500); // Simulate network delay
    });
};