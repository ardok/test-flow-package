// @flow
import {sum} from '@ardo/test-library';
import type {NumberListT, SumOptionsT, SumReturnT} from '@ardo/test-library';

function wrapperSum(numbers: NumberListT, options: SumOptionsT): string {
  return sum([1, 2]);
}

console.log(wrapperSum([1, 2]));
