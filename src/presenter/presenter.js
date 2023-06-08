import SortView from '../view/sorting-view.js';
import RoutePointItemView from '../view/route-point-item-view.js';
import RoutePointListView from '../view/route-point-list-view.js';
import EditingForm from '../view/editing-form-view.js';
import CreatingFormView from '../view/creating-form-view.js';
import NoPointsView from '../view/no-points-view.js';
import {render, replace} from '../framework/render.js';
import { isEscapeKey } from '../util.js';
// eslint-disable-next-line no-console
console.log('hi');

export default class TripPresenter {
  #tripContainer = null;
  #tripPointsModel = null;
  #eventListComponent = null;

  constructor({tripContainer, tripPointsModel}) {
    this.#tripContainer = tripContainer;
    this.#tripPointsModel = tripPointsModel;
  }

  init() {
    const tripPoints = [...this.#tripPointsModel.tripPoints];
    if (tripPoints.length === 0) {
      render(new NoPointsView(), this.#tripContainer);
    } else {
      this.#eventListComponent = new RoutePointListView();
      render(new SortView(), this.#tripContainer);
      render(this.#eventListComponent, this.#tripContainer);
      render(new CreatingFormView(tripPoints[0]), this.#eventListComponent.element);
      for (let i = 1; i < tripPoints.length - 1; i++) {
        this.#renderTripPoint(tripPoints[i]);
      }
    }
  }

  #renderTripPoint(tripPoint) {
    const ecsKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToPoint();
        document.body.removeEventListener('keydown', ecsKeyDownHandler);
      }
    };

    const tripPointComponent = new RoutePointItemView({
      tripPoint,
      onEditClick: () => {
        replacePointToForm.call(this);
        document.body.addEventListener('keydown', ecsKeyDownHandler);
      }});

    const editFormComponent = new EditingForm({
      tripPoint,
      onFormSubmit: () => {
        replaceFormToPoint.call(this);
        document.body.removeEventListener('keydown', ecsKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(editFormComponent, tripPointComponent);
    }

    function replaceFormToPoint() {
      replace(tripPointComponent, editFormComponent);
    }

    render(tripPointComponent, this.#eventListComponent.element);
  }
}
