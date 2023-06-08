import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FULL_DATE_FORMAT = 'DD/MM/YY';
const BASE_DATE_FORMAT = 'DD/MM/YY H:mm';


export const getEventDateTime = (date) => date.substring(0, date.indexOf('T'));
export const getEventDate = (date) => dayjs(date).format(DATE_FORMAT);
export const getDateTime = (date) => date.substring(0, date.lastIndexOf(':'));
export const getTime = (date) => dayjs(date).format(TIME_FORMAT);
export const getBasicime = (date) => dayjs(date).format(BASE_DATE_FORMAT);
export const getFormDate = (date) => dayjs(date).format(FULL_DATE_FORMAT);


