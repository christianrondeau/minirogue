///<reference path="../src/types/node.process.d.ts" />

import { Game } from '../src/game';
import * as blessed from 'blessed';

import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

const expect = chai.expect
chai.use(sinonChai);

describe('Game', () => {
	let screen: any; //Sinon.SinonStub;
	let game: Game;

	beforeEach(() => {
		// process = sinon.createStubInstance(NodeJS.TermWritableStream);
		game = new Game(screen as blessed.Widgets.Screen);
	});

	it('should work', () => {
		expect(game).to.exist;
	})
});
