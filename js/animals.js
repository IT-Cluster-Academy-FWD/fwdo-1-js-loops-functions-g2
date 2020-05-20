const animals = [
  {
    type: 'dog',
    name: 'Jack',
    age: 9
  },
  {
    type: 'cat',
    name: 'Mike',
    age: 8
  },
  {
    type: 'fish',
    name: 'Nemo',
    age: 2
  },
  {
    type: 'bull',
    name: 'Niko',
    age: 3
  }
];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  document.write('We have an animal: ' + animal.type + '. Its name: ' + animal.name + '. it lives with us ' + animal.age + ' years.' + '<br>');
}