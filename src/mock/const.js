const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offers = [
  {
    id: 1,
    title: 'Upgrade a business class',
    price: 140
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 40
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 70
  },
  {
    id: 4,
    title: 'Add meal',
    price: 90
  },
  {
    id: 5,
    title: 'Choose seats',
    price: 55
  },
  {
    id: 6,
    title: 'Travel by train',
    price: 190
  },
  {
    id: 7,
    title: 'Add alcohol',
    price:230
  },
  {
    id: 8,
    title: 'Upgrade a car',
    price: 150
  },
  {
    id: 9,
    title: 'No queue',
    price: 200
  }
];

const getOfferName = (offerId) => {
  const { title } = offers.find((offer) => offer.id === offerId);
  return title;
};

const getOfferPrice = (offerId) => {
  const { price } = offers.find((offer) => offer.id === offerId);
  return price;
};

const taxiOffers = [1, 2, 3];

const busOffers = [2, 5, 6];

const trainOffers = [2, 4, 5, 7];

const shipOffers = [4, 5, 7];

const driveOffers = [8];

const flightOffers = [4, 5, 6, 7];

const checkInOffers = [9];

const sightseeingOffers = [3];

const restaurantOffers = [5];

const getArrayFromType = (type) => {
  switch (type) {
    case 'taxi':
      return taxiOffers;
    case 'bus':
      return busOffers;
    case 'train':
      return trainOffers;
    case 'ship':
      return shipOffers;
    case 'drive':
      return driveOffers;
    case 'flight':
      return flightOffers;
    case 'check-in':
      return checkInOffers;
    case 'sightseeing':
      return sightseeingOffers;
    case 'restaurant':
      return restaurantOffers;
  }
};

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.'
  , 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.'
  , 'Aliquam erat volutpat.', 'In rutrum ac purus sit amet tempus.'
];

const NAMES_OF_CITIES = [
  'Chamonix', 'Amsterdam', 'Geneva', 'Paris', 'Dubai', 'Istanbul'
];

const fromToDates = [
  {
    dateFrom: '2019-07-11T11:22:13.375Z',
    dateTo: '2019-07-11T11:40:13.375Z'
  },
  {
    dateFrom: '2019-07-13T11:22:13.375Z',
    dateTo: '2019-07-13T14:40:13.375Z'
  },
  {
    dateFrom: '2019-07-10T11:22:13.375Z',
    dateTo: '2019-07-10T11:40:13.375Z'
  },
  {
    dateFrom: '2019-07-15T09:15:13.375Z',
    dateTo: '2019-07-15T12:00:13.375Z'
  },
  {
    dateFrom: '2019-08-01T17:00:13.375Z',
    dateTo: '2019-08-01T18:00:13.375Z'
  },
  {
    dateFrom: '2019-08-03T11:22:13.375Z',
    dateTo: '2019-08-03T11:40:13.375Z'
  },
  {
    dateFrom: '2019-08-05T07:30:13.375Z',
    dateTo: '2019-08-05T09:00:13.375Z'
  },
  {
    dateFrom: '2019-07-18T20:20:13.375Z',
    dateTo: '2019-07-18T21:40:13.375Z'
  },
  {
    dateFrom: '2019-07-21T01:28:13.375Z',
    dateTo: '2019-07-21T07:40:13.375Z'
  },
  {
    dateFrom: '2019-07-28T16:15:13.375Z',
    dateTo: '2019-07-28T20:40:13.375Z'
  }
];

export {pointType, offers, getArrayFromType, DESCRIPTIONS, NAMES_OF_CITIES, fromToDates, getOfferName, getOfferPrice};
