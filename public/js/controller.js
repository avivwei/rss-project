app.controller('journyCtrl', function($scope, journyFact,$http){

	$scope.addLinkToDB = function(){

	console.log('addLinkToDB function was registered');

	$http.post('/addlink', {text: $scope.input}).success(function(response){
			console.log('heeeyyy')
			// console.log(response);
		});

	$http.get("https://medium.com/feed/the-story/tagged/medium-update",
	{
		transformResponse: function (cnv) {
			var x2js = new X2JS();
			var aftCnv = x2js.xml_str2json(cnv);
			return aftCnv;
		}
	}).success(function (response) {
		console.log(response);
	});
    }

	var getAllDB = function() {

		$http.get('/getAll').success(function(response){
				$scope.messages = response;
				console.log($scope.messages);

		});

	};

	$scope.addToDB = function(){
		
		console.log('hey I got to the addToDB funct');

		$http.post('/journey', {text: $scope.input}).success(function(response){
			console.log('heeeyyy')
			console.log(response);
		});

		getAllDB();

	}
	

});