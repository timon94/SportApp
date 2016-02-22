(function () {
	'use strict';

	angular.module('list').controller('listController', function ($scope, Broadcasts) {
		Broadcasts.getData().then(function (response) {
			$scope.broadcastsData = response.data;
		});
	});
})();