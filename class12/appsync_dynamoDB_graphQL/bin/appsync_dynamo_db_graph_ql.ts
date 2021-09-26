#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncDynamoDbGraphQlStack } from '../lib/appsync_dynamo_db_graph_ql-stack';

const app = new cdk.App();
new AppsyncDynamoDbGraphQlStack(app, 'AppsyncDynamoDbGraphQlStack');
