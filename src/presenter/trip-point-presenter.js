import { replace, remove } from '../framework/render';
import RoutePointItemView from '../view/route-point-item-view';
import EditingForm from '../view/editing-form-view';
import { isEscapeKey } from '../utils/util.js';
import { UserAction, UpdateType } from '../const';
import { areDatesEqual } from '../utils/format-time-utils';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class TripPointPresenter {
  #handleModeChange = null;
  #handleDataChange = null;
  #tripPointList = null;
  #editFormComponent = null;
  #tripPointComponent = null;

  #tripPoint = null;
  #destinations = null;
  #offers = null;
  #mode = Mode.DEFAULT;

  constructor({tripPointList, onModeChange, onDataChange}) {
    this.#tripPointList = tripPointList;
    this.#handleModeChange = onModeChange;
    this.#handleDataChange = onDataChange;
  }

  init(tripPoint, destinations, offers) {
    this.#tripPoint = tripPoint;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevTripPointComponent = this.#tripPointComponent;
    const prevEditFormComponent = this.#editFormComponent;

    this.#tripPointComponent = new RoutePointItemView({
      tripPoint: this.#tripPoint,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#handleEditClick
    });

    this.#editFormComponent = new EditingForm({
      tripPoint: this.#tripPoint,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#handleFormSubmit,
      oonRollUpButton: this.#handleRollupButtonClick,
      onDeleteClick: this.#handleDeleteClick
    });

    switch (this.#mode) {
      case Mode.DEFAULT:
        replace(this.#tripPointComponent, prevTripPointComponent);
        break;
      case Mode.EDITING:
        replace(this.#editFormComponent, prevEditFormComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editFormComponent, prevEditFormComponent);
    }

    remove(prevEditFormComponent);
    remove(prevTripPointComponent);
  }

  destroy() {
    remove(this.#tripPointComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#editFormComponent.reset(this.#tripPoint);
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm = () => {
    replace(this.#editFormComponent, this.#tripPointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#tripPointComponent, this.#editFormComponent);
    this.#mode = Mode.DEFAULT;
    document.body.removeEventListener('keydown', this.#ecsKeyDownHandler);
  };

  #ecsKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.body.removeEventListener('keydown', this.#ecsKeyDownHandler);
    }
  };


  #handleEditClick = () => {
    this.#replacePointToForm();
    document.body.addEventListener('keydown', this.#ecsKeyDownHandler);
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate = !areDatesEqual(this.#tripPoint.dateFrom, update.dateFrom) || this.#tripPoint.basePrice !== update.basePrice;
    this.#handleDataChange(
      UserAction.UPDATE_TRIPPOINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update,
    );
    this.#replaceFormToPoint();
    document.body.removeEventListener('keydown', this.#ecsKeyDownHandler);
  };

  #handleRollupButtonClick = () => {
    this.#replaceFormToPoint();
    this.#editFormComponent.reset(this.#tripPoint);
  };

  #handleDeleteClick = (tripPoint) => {
    this.#handleDataChange(
      UserAction.DELETE_TRIPPOINT,
      UpdateType.MINOR,
      tripPoint,
    );
  };

}
