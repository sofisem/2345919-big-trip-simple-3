import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import {render} from './framework/render.js';
import NewTripPointButtonView from './view/new-trip-point-button.js';
import TripPresenter from './presenter/presenter.js';
import TripPointModel from './model/point-model.js';
import TripPointApiService from './presenter/trip-point-api.js';

const AUTHORIZATION = 'Basic ssssmnv6666';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';

const tripContainer = document.querySelector('.trip-events');
const filtersTemlate = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');


const tripPointApiService = new TripPointApiService(END_POINT, AUTHORIZATION);

const tripPointsModel = new TripPointModel({
  tripPointApiService
});
const destinationsModel = new DestinationsModel({tripPointApiService});
const offersModel = new OffersModel({tripPointApiService});
const filterModel = new FilterModel();

const newTripPointButtonComponent = new NewTripPointButtonView({
  onClick: handleNewTripPointButtonClick
});

const tripPresenter = new TripPresenter({
  tripContainer,
  tripPointsModel,
  destinationsModel,
  offersModel,
  filterModel,
  onNewTripPointDestroy
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersTemlate,
  filterModel,
  tripPointsModel
});


function handleNewTripPointButtonClick() {
  tripPresenter.createTripPoint();
  newTripPointButtonComponent.element.disabled = true;
}

function onNewTripPointDestroy() {
  newTripPointButtonComponent.element.disabled = false;
}


filterPresenter.init();
tripPresenter.init();
tripPointsModel.init()
  .finally(() => {
    render(newTripPointButtonComponent, siteHeaderElement);
  });

