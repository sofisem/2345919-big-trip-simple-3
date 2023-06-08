
import AbstractView from '../framework/view/abstract-view.js';
import { isDisabled } from '../utils/sorts.js';

import { SortType } from '../mock/const';
import { capitalizeType } from '../utils/util.js';

function createSortingItemTemplate(sortType) {
  return `
  <div class="trip-sort__item  trip-sort__item--${sortType}">
  <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}" ${isDisabled(sortType)} ${(sortType === 'day' ? 'checked' : '')}>
    <label class="trip-sort__btn" for="sort-${sortType}">${capitalizeType(sortType)}</label>
  </div>`;
}

function createSortingTemplate() {
  const sortItemsTemplate = Object.values(SortType).map((sortType) => createSortingItemTemplate(sortType)).join('');
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${sortItemsTemplate}
    </form>`
  );
}

export default class SortView extends AbstractView{

  get template() {
    return createSortingTemplate();
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  };

  #sortTypeChangeHandler = (evt) => {
    // if (evt.target.tagname !== 'INPUT') {
    //   console.log(evt.target);
    //   return;
    // }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.value.split('-')[1]);
  };

}

