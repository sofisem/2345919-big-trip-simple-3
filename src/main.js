import TripPresenter from './presenter/presenter.js';
import FiltersView from './view/filters-view.js';
import TripPointModel from './model/point-model.js';
import { tripPoints } from './mock/point.js';
import {render} from './framework/render.js';
import { mockInit } from './mock/util.js';

const eventsTemplate = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');


mockInit(5, 10);
const tripPointsModel = new TripPointModel(tripPoints);

const tripPresenter = new TripPresenter({tripContainer: eventsTemplate, tripPointsModel});
render(new FiltersView(), filtersTemlate);
tripPresenter.init();

