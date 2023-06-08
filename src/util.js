import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FULL_DATE_FORMAT = 'DD/MM/YY';
const BASE_DATE_FORMAT = 'DD/MM/YY H:mm';

export const getItemByIDFromItems = (items, id) => (items.find((item) => item.id === id));


export const generateRandomElementFromArray = (items) => items[Math.floor(Math.random() * items.length)];

export const generateRandomPrice = () => Math.floor(Math.random() * 1000) + 100;

export const generateRandomId = () => Math.floor(Math.random() * 100) + 1;

export const generateRandomImage = () => `http://picsum.photos/248/152?r=${generateRandomId()}`;

export const getRandomSliceFromItems = (items) => {
  const n = Math.floor(Math.random() * (items.length + 1));
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const createIDgenerator = () => {
  let id = 0;
  return () => ++id;
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const getEventDateTime = (date) => date.substring(0, date.indexOf('T'));
export const getEventDate = (date) => dayjs(date).format(DATE_FORMAT);
export const getDateTime = (date) => date.substring(0, date.lastIndexOf(':'));
export const getTime = (date) => dayjs(date).format(TIME_FORMAT);
export const getBasicime = (date) => dayjs(date).format(BASE_DATE_FORMAT);
export const capitalizeType = (type) => type.charAt(0).toUpperCase() + type.slice(1);
export const getFormDate = (date) => dayjs(date).format(FULL_DATE_FORMAT);
export const isTripDateBeforeToday = (date) => dayjs(date).isBefore(dayjs(), 'D') || dayjs(date).isSame(dayjs(), 'D');


