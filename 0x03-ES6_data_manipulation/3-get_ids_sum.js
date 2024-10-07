export default function getStudentIdsSum(arr) {
  const b = 0;
  return arr.map((a) => a.id).reduce((a, c) => a + c, b);
}
