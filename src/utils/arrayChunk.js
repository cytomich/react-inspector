import { propertyIsEnumerable } from './objectPrototype';

class ArrayChunk {}

export function isArrayChunk(object) {
  return object instanceof ArrayChunk;
}

export function createArrayChunk(array, indexes) {
  return Object.defineProperties(
    new ArrayChunk(),
    indexes.reduce((acc, propertyName) => {
      if (propertyIsEnumerable.call(array, propertyName)) {
        acc[propertyName] = {
          value: array[propertyName],
          enumerable: true,
        };
      }
      return acc;
    }, {})
  );
}
