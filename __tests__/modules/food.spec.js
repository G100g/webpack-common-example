import food from '../../src/modules/food';

test('Food is an object', () => {
  expect(typeof food).toBe(typeof {});
  expect(food.fruits).toContain('banana');
  expect(food.fruits).toContain('apple');
});
