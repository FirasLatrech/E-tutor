export function ArrayToObject(array: any[]) {
  return array?.reduce((acc, val, index) => {
    acc[index?.toString()] = val;
    return acc;
  }, {});
}
