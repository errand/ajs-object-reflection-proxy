import orderByProps from '../orederByProps';

test('Object order with Array', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    {
      key: 'name',
      value: 'мечник',
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
  ];

  const received = orderByProps(obj, ['name', 'level']);

  expect(received).toEqual(expected);
});

test('Object order with Number', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'name',
      value: 'мечник',
    },
  ];

  const received = orderByProps(obj, 1);

  expect(received).toEqual(expected);
});

test('Check Object errors', () => {
  expect(() => orderByProps('obj', 1)).toThrow();
});
