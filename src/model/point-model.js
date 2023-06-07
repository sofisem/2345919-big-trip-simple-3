import { getRandomPoint } from '../mock/point';

const POINT_COUNT = 3;

class TripPointModel {
  constructor() {
    this.tripPoints = Array.from({length: POINT_COUNT}, getRandomPoint);
  }

  getTripPoints() {
    return this.tripPoints;
  }
}

export default TripPointModel;
