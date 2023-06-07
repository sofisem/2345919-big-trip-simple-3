import { generateRandomImage, generateRandomElementFromArray } from '../util.js';
import { DESCRIPTIONS } from './const.js';

function createImages() {
  return {
    src: generateRandomImage(),
    description: generateRandomElementFromArray(DESCRIPTIONS)
  };
}

export {createImages};
