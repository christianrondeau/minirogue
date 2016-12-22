if (!process.stdout.isTTY)
    throw "Not a TTY";
console.log("Rogue (res: " + process.stdout.rows + "x" + process.stdout.columns + ")");
process.stdout.on("resize", function () {
    console.log("screen size has changed!");
    console.log(process.stdout.columns + "x" + process.stdout.rows);
});
//# sourceMappingURL=main.js.map