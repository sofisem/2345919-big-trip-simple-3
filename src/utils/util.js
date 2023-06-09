const getItemByIDFromItems = (items, id) => (items.find((item) => item.id === id));
const isEscapeKey = (evt) => evt.key === 'Escape';
const capitalizeType = (type) => type.charAt(0).toUpperCase() + type.slice(1);

export {capitalizeType, getItemByIDFromItems, isEscapeKey};
