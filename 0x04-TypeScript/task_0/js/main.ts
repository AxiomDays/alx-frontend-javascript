interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

class Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;

	constructor(firstName: string, lastName: string, age: number, location: string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

}

const student1: Student = new Student("Dan", "Chi", 22, "Enugu");
const student2: Student = new Student("Donvan", "Walpurg", 24, "Walpurg");

const studentsList = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
