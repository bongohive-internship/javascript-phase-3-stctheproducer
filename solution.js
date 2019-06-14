// solutions to the exercises mentioned in the readme should be in this file.
const largerInt = (a, b) => (a > b ? console.log(a) : console.log(b));

for (let i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}
