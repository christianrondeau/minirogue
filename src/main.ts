///<reference path="./types/node.process.d.ts" />

import { Game } from "./game";
import * as blessed from 'blessed';

let game = new Game(blessed.screen({
	smartCSR: true
}));

game.start();
