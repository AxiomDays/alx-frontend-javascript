export default function concatArrays(array1, array2, string) {
  const temp = [];
  return (temp.concat(...array1).concat(...array2).concat(...string));
}
