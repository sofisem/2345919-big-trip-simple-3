import Observable from '../framework/observable';

export default class OffersModel extends Observable {
  #tripPointApi = null;
  #offers = [];

  constructor (tripPointApi) {
    super();
    this.#tripPointApi = tripPointApi;
    this.init();
  }

  async init() {
    try {
      this.#offers = await this.#tripPointApi.offers;
    } catch(err) {
      this.#offers = [];
    }
  }

  get offers() {
    return this.#offers;
  }

}
