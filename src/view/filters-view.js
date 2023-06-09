import AbstractView from '../framework/view/abstract-view.js';


function createFiltersItemTemplate(filter, currentFilter) {
  return `
  <div class="trip-filters__filter">
  <input
      id="filter-${filter.type}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${filter.type}"
      ${filter.type === currentFilter ? 'checked' : ''}>
      <label class="trip-filters__filter-label"
      for="filter-${filter.type}">${filter.name}</label>
  </div>
  `;
}

function createFilterTemplate(filterItems, currentFilter) {
  const filterItemsTemplate = filterItems
    .map((filter) => createFiltersItemTemplate(filter, currentFilter))
    .join('');
  return (`
    <form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this._callback.onFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);

  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this._callback.onFilterTypeChange(evt.target.value);
  };
}
