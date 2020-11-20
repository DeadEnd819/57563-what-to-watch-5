import PropTypes from "prop-types";

const {arrayOf, shape, number, string, bool} = PropTypes;

export const FilmCardType = shape({
  id: number.isRequired,
  name: string.isRequired,
  previewImage: string.isRequired,
  previewVideoLink: string.isRequired,
});

export const FilmScreenType = shape({
  id: number.isRequired,
  name: string.isRequired,
  posterImage: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  description: string.isRequired,
  rating: number.isRequired,
  scoresCount: number.isRequired,
  director: string.isRequired,
  starring: arrayOf(string).isRequired,
  runTime: number.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
  isFavorite: bool.isRequired,
});

export const ReviewType = shape({
  id: number.isRequired,
  name: string.isRequired,
  rating: number.isRequired,
  comment: string.isRequired,
  date: string.isRequired,
});

export const PromoTypes = shape({
  id: number.isRequired,
  name: string.isRequired,
  posterImage: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
  isFavorite: bool.isRequired,
});
