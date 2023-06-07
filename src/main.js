import TripPresenter from './presenter/presenter.js';
import { render } from './render.js';
import FiltersView from './view/filters-view.js';
import TripPointModel from './model/point-model.js';


const eventsTemplate = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');
const tripPointsModel = new TripPointModel();

const tripPresenter = new TripPresenter({tripContainer: eventsTemplate, tripPointsModel});
render(new FiltersView(), filtersTemlate);
tripPresenter.init();
