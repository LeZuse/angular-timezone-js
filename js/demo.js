var demo = angular.module('demo', ['timezonejs']);

demo.run(['$rootScope', '$filter', 'Timezone', function($rootScope, $filter, Timezone) {
	console.log('s', $rootScope, Timezone);
	// $rootScope.today = 'a nice day';
	$rootScope.timezone = 'America/Los_Angeles';
	var nativeDate = new Date();
	var date = new Timezone.Date(nativeDate, $rootScope.timezone);
	$rootScope.today = nativeDate;
}]);
