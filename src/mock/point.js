import { generateRandomPrice, generateRandomId, generateRandomElementFromArray } from '../util.js';
import {fromToDates, getArrayFromType, pointType } from './const.js';
import { getRandomDestination } from './destination.js';

const pointsId = [];

const getRandomPoint = () => {
  let id = generateRandomId();
  while (pointsId.indexOf(id) >= 0) {
    id = generateRandomId();
  }
  pointsId.push(id);
  const basePrice = generateRandomPrice();
  const dates = generateRandomElementFromArray(fromToDates);
  const dateFrom = dates.dateFrom;
  const dateTo = dates.dateTo;
  const destination = getRandomDestination();
  const type = generateRandomElementFromArray(pointType);
  const offers = getArrayFromType(type);

  return {
    basePrice, dateFrom, dateTo, destination, id, offers, type
  };
};

export {getRandomPoint};
