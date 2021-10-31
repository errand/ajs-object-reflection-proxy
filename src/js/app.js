function orderByProps(object, values) {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
    object = new Proxy(object, {
      ownKeys(target) {
        console.log(Object.keys(target));
      },
    });
    return object;
  }
  throw new Error('First agrument should be an Object');
}

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

orderByProps(obj, ['name', 'level']);
