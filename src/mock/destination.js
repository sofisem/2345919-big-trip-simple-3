
import { generateRandomElementFromArray, createIDgenerator } from '../utils/util.js';
import { DESCRIPTIONS, NAMES_OF_CITIES} from './const';


const destinations = [];
const generateImageId = createIDgenerator();
const generatePictures = () => {
  const images = [];
  for (let i = 0; i < 6; i++) {
    const image = {
      src: `img/photos/${generateImageId()}.jpg`,
      description: generateRandomElementFromArray(DESCRIPTIONS)
    };
    images.push(image);
  }
  return images;
};


const generateDestinationId = createIDgenerator();

const generateDestinations = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: generateRandomElementFromArray(DESCRIPTIONS),
      name: generateRandomElementFromArray(NAMES_OF_CITIES),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};


export {generateDestinations,destinations};
