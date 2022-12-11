import * as demoLib from '@custom-project/demo-lib';
import * as utilities from '@custom-project/utilities';
import * as awsLambda from 'aws-lambda';

export const handler = async (event: any, context: awsLambda.Context) => {
  demoLib.printSomeMessage('Lambda started');

  demoLib.printSomeMessage();

  demoLib.printAndSayHello('before hello...');

  utilities.sayHello();

  console.log('Lambda has finished');
};
