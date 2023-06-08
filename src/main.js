import TripPresenter from './presenter/presenter.js';
import FiltersView from './view/filters-view.js';
import TripPointModel from './model/point-model.js';
import { mockInit, tripPoints } from './mock/point.js';
import {render} from './framework/render.js';
import { generateFilter } from './mock/filters.js';
import { generateSorter } from './mock/sorting.js';


const eventsTemplate = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');
const filters = generateFilter();
const sorters = generateSorter();

mockInit(5, 10);
const tripPointsModel = new TripPointModel(tripPoints);

const tripPresenter = new TripPresenter({tripContainer: eventsTemplate, tripPointsModel, sorters});
render(new FiltersView(filters), filtersTemlate);
tripPresenter.init();

