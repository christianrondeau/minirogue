///<reference path="./types/node.process.d.ts" />

import { Game } from "./game";
import { Renderer } from "./renderer";

let renderer = new Renderer();
let game = new Game(renderer);
game.start();
