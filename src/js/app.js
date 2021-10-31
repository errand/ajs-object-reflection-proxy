function orderByProps(object, values) {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
    const sorted = Object.keys(object)
      .map(key => ({ key: key, value: object[key] }))
      .sort((a, b) => {
        if (a.key.toUpperCase() > b.key.toUpperCase()) {
          return 1;
        }
        if (a.key.toUpperCase() < b.key.toUpperCase()) {
          return -1;
        }
        return 0;
      });

    for (let key in object) {
      console.log(key);
    }

    console.log(sorted);
    /* const filtered = Object.keys(object)
      .filter(key => values.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: object[key]
        };
      }, {});

    console.log(filtered) */
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
