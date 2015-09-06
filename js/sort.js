define([], function() {
	function quickSort(arr) {
		if (arr.length <= 1) return arr;
		var pivot = Math.floor(arr.length / 2);
		var pivotItem = arr.splice(pivot, 1)[0];
		var left = [];
		var right = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] < pivotItem) {
				left.push(arr[i]);
			}
			if (arr[i] > pivotItem) {
				right.push(arr[i]);
			}
		}
		return quickSort(left).concat([pivotItem], quickSort(right));
	}
	function bubbleSort(){
				
	}
	return {
		quickSort:quickSort,
		bubbleSort:bubbleSort
	}
})