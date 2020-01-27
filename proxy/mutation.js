const owner = { name: 'J.M.' };

const car = {
  color: 'blue',
  doors: 4,
  features: ['sunroof'],
  details: {
    year: 2019,
    manufacturer: 'Mercedes'
  },
  sold: true,
  owner
};

JSON.stringify(car);

// Using JSON.parse(JSON.stringify(object)) deeply clones the object
// With a catch though.
// The object has to only consist of the values supported by JSON:
//   - strings, numbers, booleans, null, arrays, and objects
//   - no object methods
const carClone = JSON.parse(JSON.stringify(car));
const shallowClone = Object.assign({},);
car.owner.name = 'D.T.';
car.color = "black";
car.details.manufacturer = 'lion'

// console.log('car', car);
// console.log('carClone', carClone);
console.log('shallowClone', shallowClone);



// homog
// a = {
  // a:1, particular value
  // b:{} referral
// }


// deepcopy by doing recursion