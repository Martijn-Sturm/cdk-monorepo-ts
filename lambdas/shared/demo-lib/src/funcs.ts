import * as utilities from '@custom-project/utilities';


export function printSomeMessage(msg: string = 'this comes from demo_lib package') {
  console.log(msg);
}

export function printAndSayHello(msg: string) {
  console.log(msg);
  utilities.sayHello();
}