export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return (this._name);
  }

  get length() {
    return (this._length);
  }

  get students() {
    return (this._students);
  }

  set name(input) {
    if (typeof input !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = input;
  }

  set length(input) {
    if (typeof input !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = input;
  }

  set students(input) {
    if (input.every((i) => typeof i === 'string') !== true) {
      throw new TypeError('Students must be a string of arrays');
    }

    if (Array.isArray(input) !== true) {
      throw new TypeError('Students must be an array');
    }

    this._students = input;
  }
}
