///<reference path="./types/node.process.d.ts" />

export class Game {
	stdout: NodeJS.TermWritableStream;

	constructor(stdout: NodeJS.TermWritableStream) {
		if (!stdout) throw "No output stream";
		if (!stdout.isTTY) throw "Not a TTY";

		this.stdout = stdout;
	}

	start() {
		this.stdout.write("Rogue (res: " + this.stdout.rows + "x" + this.stdout.columns + ")");

		process.stdout.on("resize", () => {
			this.stdout.write("screen size has changed!");
			this.stdout.write(`${this.stdout.columns}x${this.stdout.rows}`);
		});
	}
}
