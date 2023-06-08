
import dayjs from 'dayjs';

const disabledSorts = ['event', 'offer' ];
export const isDisabled = (sortType) => (disabledSorts.includes(sortType) ? 'disabled' : '');
export const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
export const sortPointsByDate = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
