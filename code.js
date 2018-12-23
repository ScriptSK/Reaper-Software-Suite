var app = angular.module("myApp", []);


app.service("ProcessService", function ($http, $q)
{
	var url="https://raw.githubusercontent.com/ScriptSK/ps4reaper.github.io/master/processlist.json";
	var deferred = $q.defer();
	$http.get("http://192.168.1.17:771/list").then(function (data)
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
