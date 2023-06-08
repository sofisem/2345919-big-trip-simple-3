import SortView from '../view/sorting-view.js';
import CreatingFormView from '../view/creating-form-view.js';
import NoPointsView from '../view/no-points-view.js';
import {RenderPosition, render} from '../framework/render.js';
import TripPointPresenter from './trip-point-presenter';
import RoutePointListView from '../view/route-point-list-view.js';

export default class TripPresenter {
  #tripContainer = null;
  #tripPointsModel = null;
  #tripPoints = null;

  #tripPointsListComponent = new RoutePointListView();
  #noTripPointComponent = new NoPointsView();
  #sortComponent = new SortView();
  #tripPointPresenter = new Map();

  constructor({tripContainer, tripPointsModel}) {
    this.#tripContainer = tripContainer;
    this.#tripPointsModel = tripPointsModel;
  }

  init() {
    this.#tripPoints = [...this.#tripPointsModel.tripPoints];
    this.#renderBoard();
  }

  #renderSort() {
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoTripPoints() {
    render(this.#noTripPointComponent, this.#tripContainer, RenderPosition.AFTERBEGIN );
  }

  #handleModeChange = () => {
    this.#tripPointPresenter.forEach((presenter) => presenter.resetView());
  };


  #renderTripPoint(tripPoint) {
    const tripPoinPresenter = new TripPointPresenter({
      tripPointList: this.#tripPointsListComponent.element,
      onModeChange: this.#handleModeChange
    });

    tripPoinPresenter.init(tripPoint);
    this.#tripPointPresenter.set(tripPoint.id, tripPoinPresenter);
  }


  #renderTripPoints() {
    this.#tripPoints.forEach((tripPoint) => this.#renderTripPoint(tripPoint));
  }

  #renderTripPointsList() {
    render(this.#tripPointsListComponent, this.#tripContainer);
    this.#renderTripPoints();
  }

  #renderBoard() {

    if (this.#tripPoints.length === 0) {
      render(this.#renderNoTripPoints, this.#tripContainer);
      return;
    }
    this.#renderSort();

    render(new CreatingFormView(this.#tripPoints[0]), this.#tripPointsListComponent.element);
    this.#renderTripPointsList();

  }

  #clearTripPointList() {
    this.#tripPointPresenter.forEach((presenter) => presenter.destroy());
    this.#tripPointPresenter.clear();
    //remove(this.#sortComponent);
  }
}

