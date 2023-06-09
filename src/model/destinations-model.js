import Observable from '../framework/observable';

export default class DestinationsModel extends Observable {
  #tripPointApi = null;
  #destinations = [];

  constructor (tripPointApi) {
    super();
    this.#tripPointApi = tripPointApi;
    this.init();
  }

  async init() {
    try {
      this.#destinations = await this.#tripPointApi.destinations;
    } catch(err) {
      this.#destinations = [];
    }
  }


  get destinations() {
    return this.#destinations;
  }
}
