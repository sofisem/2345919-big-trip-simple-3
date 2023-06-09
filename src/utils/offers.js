import { getRandomSliceFromItems } from './util.js';
import { offersByType } from '../mock/const';

export const getOffersByType = (type) => offersByType.find((offers) => offers.type === type).offers;

export const getRandomOffersIdsByType = (type) => {
  const currentTypeRandomOffers = getRandomSliceFromItems(getOffersByType(type));
  return currentTypeRandomOffers.map((offer) => offer.id);
};
