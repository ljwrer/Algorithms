require.config({
	baseUrl:"js",
	paths:{
		"search":"search",
		"sort":"sort"
	}
});
require(["search","sort"],function(search,sort){
	var arr1 = [5, 98, 76, 25, 47, 34, 87, 14, 12];
	var arr2 = [1, 2, 5, 9, 15, 25, 35, 66, 78, 97];
	alert(search.binary(arr2,15));
	alert(sort.quickSort(arr1))
});