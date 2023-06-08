import SortView from '../view/sorting-view.js';
import RoutePointItemView from '../view/route-point-item-view.js';
import RoutePointListView from '../view/route-point-list-view.js';
import EditingForm from '../view/editing-form-view.js';
import CreatingFormView from '../view/creating-form-view.js';
import NoPointsView from '../view/no-points-view.js';
import { render } from '../render.js';
import { isEscapeKey } from '../util.js';
// eslint-disable-next-line no-console
console.log('hi');

export default class TripPresenter {
  #tripContainer = null;
  #tripPointsModel = null;
  #eventListComponent = null;
  #tripPoints = null;

  constructor({tripContainer, tripPointsModel}) {
    this.#tripContainer = tripContainer;
    this.#tripPointsModel = tripPointsModel;
  }

  init() {
    this.#tripPoints = [...this.#tripPointsModel.tripPoints];
    if (this.#tripPoints.length === 0) {
      render(new NoPointsView(), this.#tripContainer);
    } else {
      this.#eventListComponent = new RoutePointListView();
      render(new SortView(), this.#tripContainer);
      render(this.#eventListComponent, this.#tripContainer);
      render(new CreatingFormView(this.#tripPoints[0]), this.#eventListComponent.element);
      for (let i = 1; i < this.#tripPoints.length - 1; i++) {
        this.#renderTripPoint(this.#tripPoints[i]);
      }
    }
  }

  #renderTripPoint(tripPoint) {
    const tripPointComponent = new RoutePointItemView({tripPoint});
    const editFormComponent = new EditingForm(tripPoint);

    const replacePointToForm = () => {
      this.#eventListComponent.element.replaceChild(editFormComponent.element, tripPointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#eventListComponent.element.replaceChild(tripPointComponent.element, editFormComponent.element);
    };
    tripPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.body.addEventListener('keydown', closeEditFormOnEcsapeKey);
    });

    editFormComponent.element.querySelector('.event__save-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
    });

    editFormComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
    });

    function closeEditFormOnEcsapeKey(evt) {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToPoint();
        document.body.removeEventListener('keydown', closeEditFormOnEcsapeKey);
      }
    }

    render(tripPointComponent, this.#eventListComponent.element);
  }
}
