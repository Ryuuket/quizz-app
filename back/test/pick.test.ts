import { pickQuestion } from 'src/services/pick';

describe('Pick random question', () => {
  const n: number = pickQuestion();
  expect(n >= 0);
  expect(n < 101);
});
