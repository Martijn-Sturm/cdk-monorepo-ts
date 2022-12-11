import * as utils from '@custom-project/utilities'
import * as demo from '@custom-project/demo-lib'

describe('This situation from demo LAMBDA', () => {
  test('Does a useless test assertion', () => {
    expect(1).toBe(1);
  });

  test('demo-lib custom library can be used', () => {
    demo.printAndSayHello('test message')
  })

  test('utilities custom library can be used', () => {
    utils.sayHello()
  })
});