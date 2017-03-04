var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function praise(name) {
  console.log('Good job ' + name + '!');
}

var goodJob = people.forEach(praise);
// if we call console.log(var), then it will work, but print one last line of UNDEFINED...

people.forEach(praise);
// but if we call it directly it prevents that problem. 
