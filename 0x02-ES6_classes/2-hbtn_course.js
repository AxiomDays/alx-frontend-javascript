export default class HolbertonCourse {
	constructor(name, length, students){
		this._name = typeof name === 'string' ? name: throw new TypeError("Name must be a string");
		this._length = typeof length === 'number'?length: throw new TypeError("Length must be a number");
		this._students = Array.isArray(students)?students: throw new TypeError("Students must be an array");
	}

	get name(){
		return (this._name);
	}

	get length(){
                return (this._length);
        }

	get students(){
                return (this._students);
        }

	set name(input){
		this._name = input;
	}

	set length(input){
                this._length = input;
        }

	set students(input){
                this._students.push(input);
        }
}
