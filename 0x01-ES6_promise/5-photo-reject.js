export default function uploadPhoto(filename) {
	return new Promise(function(resolve, reject) {
                        reject(Error(`${filename} cannot be processed`));
        });
}
