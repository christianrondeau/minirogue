///<reference path="../src/types/node.process.d.ts" />

import { Game } from '../src/game';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

const expect = chai.expect
chai.use(sinonChai);

describe('Game', () => {
	let process: any; //Sinon.SinonStub;
	let game: Game;

	beforeEach(() => {
		// process = sinon.createStubInstance(NodeJS.TermWritableStream);
		game = new Game(process as NodeJS.TermWritableStream);
	});

	it('should work', () => {
		expect(game).to.exist;
	})
});
