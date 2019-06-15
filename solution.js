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

function assignGrade(grade) {
	if (grade < 40) {
		return `For ${grade}, you got an F`;
	} else if (grade >= 40 && grade < 60) {
		return `For ${grade}, you got a D`;
	} else if (grade >= 60 && grade < 75) {
		return `For ${grade}, you got a C`;
	} else if (grade >= 75 && grade < 90) {
		return `For ${grade}, you got a B`;
	} else {
		return `For ${grade}, you got an A`;
	}
}

console.log(assignGrade(35));
console.log(assignGrade(50));
console.log(assignGrade(65));
console.log(assignGrade(80));
console.log(assignGrade(97));

for (let i = 60; i <= 100; i++) {
	console.log(assignGrade(i));
}

