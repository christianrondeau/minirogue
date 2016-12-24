import { Game } from "../src/game";
import { Renderer } from "../src/renderer";

import * as mocha from "mocha";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const expect = chai.expect
chai.use(sinonChai);

describe("game", () => {
	let renderer: any;
	let game: Game;

	beforeEach(() => {
		renderer = sinon.createStubInstance(Renderer);
		game = new Game(<Renderer>renderer);
	});

	describe("start", () => {
		beforeEach(() => {
			game.start();
		});

		it("should show a box", () => {
			expect(renderer.start).to.have.been.called;
		});
	});
});
