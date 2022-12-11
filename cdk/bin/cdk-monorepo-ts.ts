#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkMonorepoTsStack } from '../lib/cdk-monorepo-ts-stack';

const app = new cdk.App();
new CdkMonorepoTsStack(app, 'CdkMonorepoTsStack');