export default function orderByProps(object, values) {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
    if (!Array.isArray(values)) {
      // eslint-disable-next-line no-param-reassign
      values = [values];
    }
    const cleanArray = [];
    const propsArray = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in object) {
      if (values.indexOf(key) > -1) {
        propsArray[values.indexOf(key)] = { key, value: object[key] };
      } else {
        cleanArray.push({ key, value: object[key] });
      }
    }
    // eslint-disable-next-line max-len
    return [...propsArray, ...cleanArray.sort((a, b) => (a.key.toUpperCase() > b.key.toUpperCase() ? 1 : -1))];
  }
  throw new Error('First argument should be an Object');
}
