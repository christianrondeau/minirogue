///<reference path="./types/node.process.d.ts" />

import { Game } from "./game";

let game = new Game(<NodeJS.TermWritableStream>(process.stdout));
game.start();
