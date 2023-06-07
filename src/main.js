import TripPresenter from './presenter/presenter.js';
import { render } from './render.js';
import FiltersView from './view/filters-view.js';

const eventsTemplate = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');

const tripPresenter = new TripPresenter(eventsTemplate);
render(new FiltersView(), filtersTemlate);
tripPresenter.init();
