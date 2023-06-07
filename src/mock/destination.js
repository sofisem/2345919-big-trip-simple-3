import { DESCRIPTIONS, NAMES_OF_CITIES } from './const.js';
import { generateRandomId, generateRandomElementFromArray } from '../util.js';
import { createImages } from './image.js';


const destinationsId = [];
const destinations = [];

function getRandomDestination() {
  let id;
  do {
    id = generateRandomId();
  } while (destinationsId.includes(id));

  const description = generateRandomElementFromArray(DESCRIPTIONS);
  const name = generateRandomElementFromArray(NAMES_OF_CITIES);
  const images = createImages();
  const destination = { id, description, name, images };
  destinations.push(destination);
  destinationsId.push(id);
  return id;
}

const getCityNameById = (id) => destinations.find((destination) => destination.id === id).name;
const getCityDescriptionById = (id) => destinations.find((destination) => destination.id === id).description;
const getCityPicById = (id) => destinations.find((destination) => destination.id === id).pictures.src;
export {getRandomDestination, getCityNameById, getCityDescriptionById, getCityPicById};
