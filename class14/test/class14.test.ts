import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Class14 from '../lib/class14-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Class14.Class14Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
