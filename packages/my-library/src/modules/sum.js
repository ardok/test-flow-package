// @flow
import type {NumberListT, SumOptionsT, SumReturnT} from '../types/sum.type';

export function sum(numbers: NumberListT, options: ?SumOptionsT): SumReturnT {
  return numbers.reduce((final, a) => (final + a), 0);
}
