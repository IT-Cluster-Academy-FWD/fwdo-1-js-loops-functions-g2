let counter = 1;

console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);

console.log('for loop ->');
document.write('<h2>For numbers loop</h2>');
// for loop
for (let counter = 1; counter <= 20; counter = counter + 1) {
  document.write(counter + '<br>');
}

const users = ['John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon'];

document.write('<h2>Users static</h2>');
document.write(users[0] + '<br>');
document.write(users[1] + '<br>');
document.write(users[2] + '<br>');
document.write(users[3] + '<br>');
document.write(users[4] + '<br>');
document.write(users[5] + '<br>');

document.write('<h2>Users loop</h2>');
// for loop 
for (let i = 0; i <= users.length - 1; i++) {
  document.write(users[i] + '<br>');
}

// for of
document.write('<h2>Users loop for of</h2>');

for (let user of users) {
  document.write(user + '<br>');
}

// while loop

document.write('<h2>While users loop -> continue</h2>');

while (users.length > 0) {
  const user = users.pop();

  if (user === 'Jane') {
    continue;
  }

  document.write(user + '<br>');
}

// while loop

document.write('<h2>While users loop -> beak</h2>');

const people = ['John', 'Bob', 'Mike', 'Jane', 'Nick', 'Jeremy', 'Lenon'];

while (people.length > 0) {
  const person = people.pop();

  if (person === 'Jane') {
    break;
  }

  document.write(person + '<br>');
}

// For in loop

document.write('<h2>For in dog loop</h2>');

const dog = {
  name: 'Jack',
  age: 8,
  numberOfLegs: 5
};

for (const name in dog) {
  const value = dog[name];
  document.write(`Property: ${name}, Value: ${value} <br>`)
}

