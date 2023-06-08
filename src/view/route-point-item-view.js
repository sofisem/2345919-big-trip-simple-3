import { getEventDateTime, getEventDate, getDateTime, getTime, capitalizeType, getItemByIDFromItems } from '../util.js';
import { destinations } from '../mock/destination.js';
import { getOfferById } from '../mock/offers.js';
import AbstractView from '../framework/view/abstract-view.js';

function createOffersTemplate(offersIDs, type) {
  return offersIDs.map((offerID) => {
    const offer = getOfferById(offerID, type);
    return `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
         &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`;
  }).join('');
}

function createTripPointTemplate(tripPoint) {
  const destination = getItemByIDFromItems(destinations, tripPoint.destination);
  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${getEventDateTime(tripPoint.dateFrom)}">${getEventDate(tripPoint.dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${tripPoint.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${capitalizeType(tripPoint.type)} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${getDateTime(tripPoint.dateFrom)}">${getTime(tripPoint.dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${getDateTime(tripPoint.dateTo)}">${getTime(tripPoint.dateTo)}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${tripPoint.basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersTemplate(tripPoint.offersIDs, tripPoint.type)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class RoutePointItemView extends AbstractView {
  #tripPoint = null;
  #сlickEditHandler = null;

  constructor(options) {
    super();
    const { tripPoint, onEditClick } = options;
    this.#tripPoint = tripPoint;
    this.#сlickEditHandler = onEditClick;
    const rollupBtn = this.element.querySelector('.eventrollup-btn');
    rollupBtn.addEventListener('click', this.#editClickHandler);
  }


  get template() {
    return createTripPointTemplate(this.#tripPoint);
  }


  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#сlickEditHandler();
  };

}
