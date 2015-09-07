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
			} else {
				right.push(arr[i]);
			}
		}
		return quickSort(left).concat([pivotItem], quickSort(right));
	}
	function bubbleSort(arr) {
		for (var i = 0; i < arr.length-1; i++) {
			for (var j = 0; j < arr.length-i-1; j++) {
				if (arr[j] > arr[j + 1]) {
					arr[j] = arr[j] ^ arr[j + 1];
					arr[j + 1] = arr[j] ^ arr[j + 1];
					arr[j] = arr[j] ^ arr[j + 1];
				}
			}
		}
		return arr;
	}
	function  selectionSort(arr){
		var min,temp;
		for(var i=0;i<arr.length-1;i++){
			min=i;
			for(var j=i+1;j<arr.length;j++){
				if(arr[j]<arr[min]){
					min=j;
				}
			}
			temp=arr[i];
			arr[i]=arr[min];
			arr[min]=temp;
		}
		return arr;
	}
	function insertionSort(arr){
		var temp,j;
		for(var i=1;i<arr.length;i++){
			temp=arr[i]
			for(j=i;j>0&&arr[j-1]>temp;j--){
				arr[j]=arr[j-1];
			}
			arr[j]=temp;
		}
		return arr;
	}
	return {
		quickSort: quickSort,
		bubbleSort: bubbleSort,
		selectionSort:selectionSort,
		insertionSort:insertionSort
	}
})