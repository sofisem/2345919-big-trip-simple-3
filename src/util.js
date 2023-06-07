import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FULL_DATE_FORMAT = 'DD/MM/YY';

const generateRandomElementFromArray = (items) => items[Math.floor(Math.random() * items.length)];

const generateRandomPrice = () => Math.floor(Math.random() * 1000) + 100;

const generateRandomId = () => Math.floor(Math.random() * 100) + 1;

const generateRandomImage = () => `http://picsum.photos/248/152?r=${generateRandomId()}`;

const getTimeDate = (date) => date.substring(0, date.indexOf('T'));
const getDateForm = (date) => dayjs(date).format(DATE_FORMAT);
const getDateTime = (date) => date.substring(0, date.indexOf('.'));
const getTimeFormat = (date) => dayjs(date).format(TIME_FORMAT);
const getUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
const getFullFormDate = (date) => dayjs(date).format(FULL_DATE_FORMAT);

export {generateRandomElementFromArray, generateRandomPrice, generateRandomId, generateRandomImage, getTimeDate, getDateForm, getDateTime, getTimeFormat, getUpperCase, getFullFormDate};
