import * as utils from '@custom-project/utilities'
import * as demo from '@custom-project/demo-lib'

describe('test in root of project', () => {
  test('can use custom library code', () => {
    utils.sayHello();
    demo.printSomeMessage('some message')
  })
})