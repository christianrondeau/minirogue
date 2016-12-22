if (!process.stdout.isTTY)
	throw "Not a TTY";


console.log("Rogue (res: " + process.stdout.rows + "x" + process.stdout.columns + ")");

process.stdout.on("resize", () => {
	console.log("screen size has changed!");
	console.log(`${process.stdout.columns}x${process.stdout.rows}`);
});
