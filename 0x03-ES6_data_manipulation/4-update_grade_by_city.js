export default function updateStudentGradeByCity(arr, city, newGrades){

	const IdCheckArr = arr.map((a) => a.id);
	return arr.filter((a) => a.location == "San Francisco")
		.map((a) => ({"id": a.id, 
				"firstName": a.firstName, 
				"location": a.location, 
				"grade": newGrades.filter((b) => (b.studentId == a.id))[0] ? newGrades.filter((b) => (b.studentId == a.id))[0].grade : "N/A" }))
}
