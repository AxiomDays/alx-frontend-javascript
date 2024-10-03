import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName){
	return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
                .then((res) => {
			return (res.map((i) => ({
				status: i.status,
				value: i.status === "fulfilled" ? i.value : String(i.reason),
			})));
                });
};
