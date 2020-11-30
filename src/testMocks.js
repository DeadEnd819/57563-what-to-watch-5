export const promoFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false,
};

export const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `the-grand-budapest-hotel-poster.jpg`,
  previewImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#ffffff`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: true,
};

export const reviewOne = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`,
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`,
};

export const reviewTwo = {
  id: 2,
  user: {
    id: 5,
    name: `Paula Fleri-Soler`,
  },
  rating: 9.1,
  comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  date: `2019-08-08T17:40:56.569Z`,
};

export const reviews = [reviewOne, reviewTwo];

export const genresList = [
  `Action`,
  `Adventure`,
  `Comedy`,
  `Crime`,
  `Drama`,
  `Fantasy`,
  `Thriller`
];

export const state = {
  DATA: {
    films: [film, film, film, film, film, film, film],
    promo: promoFilm,
    currentFilm: film,
    currentReviews: reviews,
  },
  FILTER: {
    genre: `Drama`,
    showFilmsCount: 8,
  },
  USER: {
    name: `name`,
    avatar: `avatar.jpg`,
    status: `NOT_AUTHORIZED`,
    reviewStatus: `REVIEW_NOT_UPDATED`,
  },
};
