import {ratingOptions} from "./const";

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = ratingOptions;

export const getRatingQuality = (rating) => {
  switch (true) {
    case (rating < 3):
      return BAD;
    case (rating >= 3 && rating < 5):
      return NORMAL;
    case (rating >= 5 && rating < 8):
      return GOOD;
    case (rating >= 8 && rating < 10):
      return VERY_GOOD;
    default:
      return AWESOME;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const getEvenElements = (elements) => {
  return elements.filter((review, i) => i % 2 === 0);
};

export const getOddElements = (elements) => {
  return elements.filter((review, i) => i % 2 !== 0);
};
