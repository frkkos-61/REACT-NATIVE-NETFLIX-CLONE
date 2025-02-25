import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {
  CATEGORIES_URL,
  MOVIE_URL,
  NOW_PLAYING_MOVIE_URL,
  POPULER_MOVIE_URL,
  TOP_RATED_MOVIE_URL,
} from '../../service/url';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.results;
  },
);

const getPopulerMovies = createAsyncThunk(
  'movies/getPopulerMovies',

  async params => {
    const response = await getRequest(POPULER_MOVIE_URL, params);
    return response.data.results;
  },
);
const getMovieData = createAsyncThunk(
  'movies/getMovieData',

  async params => {
    const response = await getRequest(MOVIE_URL + params.movieId, params);
    return response.data;
  },
);
const getNowPlaying = createAsyncThunk(
  'movies/getNowPlaying',

  async params => {
    const response = await getRequest(NOW_PLAYING_MOVIE_URL, params);

    return response.data.results;
  },
);

const getCategories = createAsyncThunk('movies/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);
  return response.data.genres;
});

export {
  getTopRatedMovies,
  getCategories,
  getPopulerMovies,
  getNowPlaying,
  getMovieData,
};
