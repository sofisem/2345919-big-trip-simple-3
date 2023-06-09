
import { generateRandomElementFromArray, createIDgenerator, getRandomImageId} from '../utils/util.js';
import { DESCRIPTIONS, NAMES_OF_CITIES} from './const';


const destinations = [];
function generatePictures() {
  const images = [];
  let i = 0;
  while (i < 6) {
    const image = {
      src: `img/photos/${getRandomImageId()}.jpg`,
      description: generateRandomElementFromArray(DESCRIPTIONS)
    };
    images.push(image);
    i++;
  }
  return images;
}

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
  return destinations;
};


export {generateDestinations,destinations};
