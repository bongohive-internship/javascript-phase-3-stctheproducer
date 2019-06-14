// solutions to the exercises mentioned in the readme should be in this file.
const largerInt = (a, b) => (a > b ? console.log(a) : console.log(b));

largerInt(5, 10); // Output should be 10

for (let i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}

const sumOfMultis = () => {
	let sum = 0;
	let i = 0;

	while (i < 1000) {
		i++;
		i % 3 === 0 || i % 5 === 0 ? (sum += i) : '';
	}
	console.log(`The sum is ${sum}`);
};

sumOfMultis();
