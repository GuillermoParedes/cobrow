const logger = require('./src/console')({
  DATE: true,
});

function isTestable(value) {
  return function decorator(target) {
    target.isTestable = value;
  };
}

@isTestable(true)
class Person {}

const person = new Person();

console.log('PERSON', person);
