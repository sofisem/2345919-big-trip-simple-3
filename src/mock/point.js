import {fromToDates, EVENT_TYPES } from './const.js';
import {generateRandomElementFromArray, generateRandomPrice, createIDgenerator} from '../util.js';
import { destinations, generateDestinations } from './destination.js';
import { getRandomOffersIdsByType } from './offers.js';

const tripPoints = [];

const generateTripPointId = createIDgenerator();
const generateTripPoints = (n) => {
  for (let i = 0; i < n; i++) {
    const dates = generateRandomElementFromArray(fromToDates);
    const type = generateRandomElementFromArray(EVENT_TYPES);
    const tripPoint = {
      basePrice: generateRandomPrice(),
      dateFrom: dates.dateFrom,
      dateTo: dates.dateTo,
      destination: generateRandomElementFromArray(destinations).id,
      id: generateTripPointId(),
      offersIDs: getRandomOffersIdsByType(type),
      type
    };
    tripPoints.push(tripPoint);
  }
};
const mockInit = (numberOfTripPoints, numberOfDestinations) => {
  generateDestinations(numberOfDestinations);
  generateTripPoints(numberOfTripPoints);
};

export {mockInit, tripPoints};

