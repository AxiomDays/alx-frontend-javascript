export default function handleResponseFromAPI(promise) {
	 promise.then(() => ({ status: 200, body: 'Success' }))
    .catch((err) => (Error()))
    .then(() => {
      console.log('Got a response from the API');
    });
}
