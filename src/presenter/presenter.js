import SortView from '../view/sorting-view.js';
import RoutePointItem from '../view/route-point-list-view.js';
import RoutePointList from '../view/route-point-item-view.js';
import EditingForm from '../view/editing-form-view.js';
import CreatingFormView from '../view/creating-form-view.js';
import { render } from '../render.js';
// eslint-disable-next-line no-console
console.log('hi');

export default class TripPresenter {

  constructor({tripContainer, tripPointsModel}) {
    this.boardContainer = tripContainer;
    this.tripPointsModel = tripPointsModel;
    this.routePointList = new RoutePointList();
  }


  init() {
    this.tripPoints = [...this.tripPointsModel.getTripPoints()];

    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    const element = this.eventListComponent.getElement();

    render(new CreatingFormView(), element);
    render(new RoutePointItem(), element);
    render(new EditingForm(), element);

    this.tripPoints.forEach((tripPoint) => {
      render(new RoutePointItem({tripPoint}), element);
    });

    const extraItemCount = 3;
    for (let i = 0; i < extraItemCount; i++) {
      render(new RoutePointItem(), element);
    }
  }
}

