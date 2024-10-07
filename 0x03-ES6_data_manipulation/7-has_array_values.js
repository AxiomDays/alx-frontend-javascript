export default function hasValuesFromArray(set, arr){
	for (let x=0; x <= (arr.length-1); x++){
		if (set.has(arr[x]) == false){
			return false;
		};
	}

	return true;
}
