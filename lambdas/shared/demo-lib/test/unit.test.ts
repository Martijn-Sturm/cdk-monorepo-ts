import * as utilities from '@custom-project/utilities';
import * as thisLib from '../src/index';

describe('This situation from demo-lib package', () => {
  test('Does a useless test assertion', () => {
    expect(1).toBe(1);
  });

  test('Test a function from this package', () => {
    thisLib.printSomeMessage('message');
  });

  test('Test a function from this package, which depends on another custom library', () => {
    thisLib.printAndSayHello('message');
  });

  test('Test a function from another custom library, which is installed in this package', () => {
    utilities.sayHello();
  });
});