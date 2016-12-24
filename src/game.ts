import {Renderer} from "./renderer";

export class Game {
	renderer: Renderer;

	constructor(renderer: Renderer) {
		this.renderer = renderer;
	}

	start() {
		this.renderer.start();
	}
}
