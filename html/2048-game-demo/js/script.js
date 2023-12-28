import Grid from './grid.js';
import Tile from './tile.js';

const gameBoard = document.getElementById('game-board');

const grid = new Grid(gameBoard);
grid.randomEmptyCell().title = new Tile(gameBoard);
grid.randomEmptyCell().title = new Tile(gameBoard);
