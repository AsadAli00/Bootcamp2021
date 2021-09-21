import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Step03AppsyncWithLambdaAsADataSource from '../lib/step03_appsync_with_lambda_as_a_data_source-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Step03AppsyncWithLambdaAsADataSource.Step03AppsyncWithLambdaAsADataSourceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
