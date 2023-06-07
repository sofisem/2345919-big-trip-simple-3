import SortView from '../view/sorting-view.js';
import RoutePointList from '../view/route-point-list-view.js';
import RoutePointItem from '../view/route-point-item-view.js';
import EditingForm from '../view/editing-form-view.js';
import CreatingFormView from '../view/creating-form-view.js';
import { render } from '../render.js';
// eslint-disable-next-line no-console
console.log('hi');

export default class TripPresenter {
  routePointList = new RoutePointList();

  constructor(tripContainer){
    this.tripContainer = tripContainer;
  }

  init(){
    render(new SortView(), this.tripContainer);
    render(this.routePointList, this.tripContainer);
    render(new CreatingFormView(), this.routePointList.getElement());
    render(new RoutePointItem(), this.routePointList.getElement());
    render(new EditingForm(), this.routePointList.getElement());
    for (let i = 0; i < 3; i++){
      render(new RoutePointItem(), this.routePointList.getElement());

    }
  }

}
