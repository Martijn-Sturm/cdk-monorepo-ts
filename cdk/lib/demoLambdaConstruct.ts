
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export interface LambdaProps {
  lambdaRootDir: string;
  handlerFilePath: string;
}

export class LambdaConstruct extends Construct {
  public readonly props: LambdaProps;
  public readonly lambda: lambda.NodejsFunction;
  constructor(scope: Construct, id: string, props: LambdaProps) {
    super(scope, id);
    this.props = props;

    this.lambda = new lambda.NodejsFunction(this, 'lambda', { entry: this.getHandlerModulePath(props.lambdaRootDir, props.handlerFilePath), depsLockFilePath: `${props.lambdaRootDir}/yarn.lock`, runtime: Runtime.NODEJS_16_X });
  }

  private getHandlerModulePath(rootFolderPath: string, moduleFileName: string) {
    return `${rootFolderPath}/${moduleFileName}`;
  }
}

