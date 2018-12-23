var app = angular.module("myApp", []);


app.service("ProcessService", function ($http, $q)
{
	var url="file:///C:/Users/shini/Desktop";
	var deferred = $q.defer();
	$http.get("https://raw.githubusercontent.com/ScriptSK/ps4reaper.github.io/master/processlist.json").then(function (data)
	{
		deferred.resolve(data);
	});

	this.getProcess = function ()
	{
		return deferred.promise;
	}

});

app.controller("ProcessCtrl", function ($scope, ProcessService)
{
	var promise = ProcessService.getProcess();
	promise.then(function (data)
	{
		$scope.process = data.data;
		console.log($scope.process);
	});
});