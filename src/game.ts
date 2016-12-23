///<reference path="./types/node.process.d.ts" />

import * as blessed from 'blessed';

export class Game {
	screen: blessed.Widgets.Screen;

	constructor(screen: blessed.Widgets.Screen) {
		this.screen = screen;
		this.screen.title = "Rogue";
	}

	start() {
		var box = blessed.box({
			top: 'center',
			left: 'center',
			width: '50%',
			height: '50%',
			content: '{center}Mini {bold}Rogue{/bold}!{/center}',
			tags: true,
			border: {
				type: 'line'
			},
			style: {
				fg: 'white',
				bg: '#333333',
				border: {
					fg: '#f0f0f0'
				}
			}
		});

		this.screen.append(box);

		box.key(['i', 'enter'], function(ch, key) {
			this.screen.remove(box);
			this.screen.render();
		});

		this.screen.key(['escape', 'q', 'C-c'], function(ch, key) {
			return process.exit(0);
		});

		box.focus();

		this.screen.render();
	}
}
