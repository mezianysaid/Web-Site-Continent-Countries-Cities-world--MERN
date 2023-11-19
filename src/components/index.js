import Home from "./Home";
import LazyContinents from './continents/continents.lazy'
import LazyCountries from './countries/countries.lazy'
import LazyCities from './cities/cities.lazy'
import LazyCountryDetails from './countryDetails/countryDetails.lazy'
import LazyContinentDetails from './continentDetails/continentDetails.lazy'
import africa from '../assets/africa.webp'
import americas from '../assets/Americas.jpg'
import andertica from '../assets/andertica.jpg'
import arctic from '../assets/arctic.png'
import australia from '../assets/australia.png'
import eurassia from '../assets/Eurasia.jpg'
import europe from '../assets/europe.jpg'
import africamap from '../assets/africa-map.jpg'
import americamap from '../assets/america-map.jpg'
import europeamap from '../assets/Europe-map.jpg'
import asiaamap from '../assets/asia-map.jpg'
import anteramap from '../assets/antarctica_map.jpg'


const continents = [
    {
        name:'Africa',
        image:africa,
        facts:"Africa is the second-largest continent in the world in both area and population. It is an almost entirely isolated landmass with only a small land bridge in the northeast, connecting the African Mainland with Western Asia.",
        Area:"Africa covers six percent of the world's total surface area, roughly 30,244,000 km² (11,700,000 mi²). Including its adjacent islands, the continent occupies about 20 percent of Earth's total land area. Africa's largest country is Algeria, followed by the Democratic Republic of the Congo (Kinshasa) and Sudan. ",
        numberCountries:"48 countries share the area of mainland Africa, plus six island nations are considered to be part of the continent. All in all, there are 54 sovereign African countries and two disputed areas, namely Somaliland (autonomous region of Somalia) and Western Sahara (occupied by Morocco and claimed by the Polisario).",
        population:"An estimated 1.37 billion people live in the second-largest continent, representing about 14 percent of the world's population (in 2021). By far the most populous country in Africa is Nigeria, with a population of more than 211 million.",
        map:africamap
    },
    {
        name:'America',
        image:americas,
        facts:"Strictly speaking, the American continent consists of two continents and the largest island in the world, North America, South America and Greenland. Central America and the Caribbean are usually considered part of North America.\n The double continent is situated entirely in the Western Hemisphere, bounded by the Pacific Ocean in the west, the Atlantic Ocean in the east, the Arctic Ocean in the north, and the Southern Ocean in the south Measured from the northernmost point of Greenland to the southernmost point of South America, it is 15,600 km as the crow flies, making America the most elongated landmass in the world.",
        Area:"With an area of 42.55 million km² (16,428,000 sq mi), the Americas cover 8.3 percent of Earth's surface area and 28.5 percent of its total land area. The largest countries by area are Canada with 9,984,670 km², the United States with 9,833,517 km², followed by Brazil with 8,515,770 km² and Argentina with 2,780,400 km². In terms of land area, the United States (9,147,593 km²) is the largest country in the Americas, followed by Canada (9,093,507 km²).",
        numberCountries:"America is shared by 35 countries (sovereign states) and several dependent territories",
        population:"An estimated 998 million people live in the Americas; [1] about 13% of the world population. The most populous countries in the Americas are the United States, with 329 million people, and Brazil, with 212 million (in 2019)",
        map:americamap
    
    },
    {
        name:'Europe',
        image:europe,
        facts:"Europe is the second-smallest continent, and it could be described as a large peninsula or as a subcontinent. Europe is the western portion of the Eurasian landmass and is located entirely in the Northern Hemisphere. Several larger islands belong to Europe, such as Iceland or the British Isles with the UK and Ireland.",
        Area:"With an area of 10.2 million km² (3,938,000 sq mi), Europe is 20% larger than the contiguous United States. The European Union has an area (without the UK) of over 4.23 million km² (1.6 million sq mi).",
        numberCountries:"Europe is shared by 50 countries. By the conventional definition, there are 44 sovereign states or nations in Europe. Not included are several countries namely Turkey, which occupies only a small part of East Thrace on the European Balkan Peninsula.Cyprus, an island in the Mediterranean Sea, is geographically part of Asia Minor (Middle East). The Faroe Islands, an island group between the Norwegian Sea and the North Atlantic Ocean are a self-governing territory of the Kingdom of Denmark Greenland, which geographically belongs to North America, is as well an autonomous Danish territory. Kosovo is a partially recognized state in the Balkans. A small piece of Western Kazakhstan is also considered to be part of Europe.",
        population:"An estimated 747 million people live in Europe. The most populous country in Europe is the European part of Russia with a population of 110 million people, followed by Germany with 83 million citizens, and Metropolitan France with 67 million inhabitants (in 2020).",
        map:europeamap


    },
    {
        name:'Asia',
        image:eurassia,
        facts:"Asia is the largest of the five continents on Planet Earth in area and population. The term Asia refers conventionally to the eastern portion of the Eurasian landmass plus the island country of Japan and the island nations of Maritime Southeast Asia.The continent is situated almost entirely north of the equator except for some Southeast Asian islands. Asia is connected to Africa by the Isthmus of Suez and borders Europe (part of the same landmass) along the Ural Mountains and across the Caspian Sea.",
        Area:"Asia covers an area of about 49.7 million km² (19,189,277 square miles), which corresponds to about 30 percent of the Earth's total land area.",
        numberCountries:"The area is shared by 50 countries.By far the largest country in terms of area is Russia, with more than 17 million km², of which 13 million km² (77%) are in Asia",
        population:"Asia is home to an estimated 4.6 billion people, about 60 percent of the world's population. More than 1.40 billion of Asia's population live in China (in 2020).Seven out of ten of the most populated countries are in Asia.",
        map:asiaamap


    },
    {
        name:'Antarctica',
        image:andertica,
        facts:"Antarctica, as a continent is, in many ways, an exception. Earth's southernmost continent is currently uninhabited, beside a handful of hard-boiled scientists, which share the place with emperor penguins, New Zealand sea lions, and elephant seals. The climate is very hostile to almost any kind of life. It is the coldest, windiest, highest (on average), and driest continent. Mount Vinson is the highest mountain in Antarctica, at 4,892 meters (16,050 feet). On the surface of the continent, no crops will grow on its frozen four kilometer-thick ice sheet",      
        Area:"",
        numberCountries:"",
        population:'',
        map:anteramap

    },       
    {
        name:'Arctic',
        image:arctic,
        facts :"The northernmost point of the Earth, the North Pole, where the Earth's axis meets the surface, is not located on a landmass, but on the Arctic polar ice cap, the surface of the frozen waters of the Arctic Ocean. Therefore, the Arctic is not considered to be a continent. Parts of the northern regions of Europe, Asia (Russia), and North America (Canada and Greenland) are located within the Arctic Circle.",
    
        Area:"",
        numberCountries:"",
        population:'',
        map:null

    },
]

export {
    Home,
    LazyContinents,
    continents,
    LazyCountries,
    LazyCities,
    africa,americas,andertica,eurassia,europe,australia,arctic,
    LazyCountryDetails,
    LazyContinentDetails
}