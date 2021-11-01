function orderByProps(object, values) {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
    const cleanArray = [];
    const propsArray = [];
    for(let key in object) {
      console.log(key + ': ' + values.indexOf(key))
      if(values.indexOf(key) > -1){
        propsArray[values.indexOf(key)] = { key: key, value: object[key] };
      } else {
        cleanArray.push({ key: key, value: object[key] });
      }
    }

    console.log([...propsArray, ...cleanArray.sort((a, b) => {
      if (a.key.toUpperCase() > b.key.toUpperCase()) {
        return 1;
      }
      if (a.key.toUpperCase() < b.key.toUpperCase()) {
        return -1;
      }
      return 0;
    })]);
    return;
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
