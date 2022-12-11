import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaConstruct } from './demoLambdaConstruct';

export class CdkMonorepoTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new LambdaConstruct(this, 'demo', { lambdaRootDir: 'lambdas/demo', handlerFilePath: 'src/lambda.ts' })
  }
}
