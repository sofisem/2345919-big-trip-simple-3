import TripPresenter from './presenter/presenter.js';
import FiltersView from './view/filters-view.js';
import TripPointModel from './model/point-model.js';
import {render} from './framework/render.js';
import { mockInit } from './mock/util.js';
import { offersByType } from './mock/const.js';

const eventsTemplate = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');


const [tripPoints, destinations] = mockInit(5, 10);
const offers = offersByType;
const tripPointsModel = new TripPointModel(tripPoints, destinations, offers);


const tripPresenter = new TripPresenter({tripContainer: eventsTemplate, tripPointsModel});
render(new FiltersView(), filtersTemlate);
tripPresenter.init();

