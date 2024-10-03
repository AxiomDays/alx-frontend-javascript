export default function signUpUser(firstName, lastName) {
	return new Promise((res, rej) => {res({
  firstName: firstName,
  lastName: lastName,
})
})
}
