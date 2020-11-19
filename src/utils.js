import {ratingOptions} from "./const";

const {BAD, NORMAL, GOOD, VERY_GOOD, AWESOME} = ratingOptions;

const ratingLevel = {
  [BAD]: (score) => score < 3,
  [NORMAL]: (score) => score >= 3 && score < 5,
  [GOOD]: (score) => score >= 5 && score < 8,
  [VERY_GOOD]: (score) => score >= 8 && score < 10
};

export const getRatingQuality = (rating) => {
  if (ratingLevel[BAD](rating)) {
    return BAD;
  } else if (ratingLevel[NORMAL](rating)) {
    return NORMAL;
  } else if (ratingLevel[GOOD](rating)) {
    return GOOD;
  } else if (ratingLevel[VERY_GOOD](rating)) {
    return VERY_GOOD;
  } else {
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
