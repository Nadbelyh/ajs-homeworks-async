/* eslint-disable comma-dangle */
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => saving,
  (error) => error
);
