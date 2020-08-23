import { add } from './sum';

describe('add() test', () => {
  it('add(1,2) = 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
