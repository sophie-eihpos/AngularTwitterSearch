angular.module('Twitter', ['ngResource']);

////one way
//function TwitterCtrl($scope, $resource){
//	$scope.twitter = $resource('http://search.twitter.com/:action',
//		{action:'search.json', q:'angularjs', callback:'twitterSearch'},
//		{get:{method:'JSONP'}});
//	//$scope.twitter.get();
//}
//function twitterSearch(result){
//	alert('this is ok');
//}

////better way
//function TwitterCtrl($scope, $resource){
//	$scope.twitter = $resource('http://search.twitter.com/:action',
//		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
//		{get:{method:'JSONP'}});
//	//$scope.twitter.get();
//	$scope.twitter.get(function(result){
//		alert("this is better");
//	})
//}

////best way
//function TwitterCtrl($scope, $resource){
//	$scope.twitter = $resource('http://search.twitter.com/:action',
//		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
//		{get:{method:'JSONP'}});
//	$scope.twitterResult = $scope.twitter.get();
//}

//final
function TwitterCtrl($scope, $resource){
	$scope.twitter = $resource('http://search.twitter.com/:action',
		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}});

	$scope.doSearch = function(){
		$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm})
	};
}