define([], function() {
	function binary(arr, item) {
		var startIndex = 0;
		var endIndex = arr.length - 1;
		var middleIndex = Math.floor((startIndex + endIndex) / 2);
		var i = 0;
		var ret = -1;
		while (item != arr[middleIndex] && startIndex < endIndex) {
			if (item > arr[middleIndex]) {
				startIndex = middleIndex + 1;
			} else {
				endIndex = middleIndex - 1;
			}
			middleIndex = Math.floor((startIndex + endIndex) / 2);
		}
		if (item == arr[middleIndex]) {
			ret = middleIndex;
		}
		return ret;
	}
	return {
		binary:binary
	}
})