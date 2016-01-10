app.controller("main_controller", function($scope, $http) {
	$scope.secrets = [];

    $scope.search_in_ss = function() {
        var query = { query: $scope.search };
        console.log(query);
        $.post("/php/controller/search_engine.php", query).always(function(data) {
            console.log(data);
        });
    };

	$scope.get_all_secrets = function() {
        $http({
            method: 'get',
            url: '/php/controller/secrets.php?action=all'
            }).then(function successCallback(response) {
                $scope.secrets = response.data;
                $scope.init();
            }, function errorCallback(response) {
                console.log(response);
            });
	};
    $scope.get_secrets = function() {
        var params = {category: $scope.cat_f};
        console.log("Params: ", params);
         $.post("/php/controller/secrets.php?action=get", params).always(function(data){
            console.log(data);
            $scope.secrets = data;
            $scope.init();
        });
	};

	$scope.new_post = function() {
		var post = {content: $scope.content, category: $scope.cat};
        $.post("/php/controller/secrets.php?action=new", post).always(function(data){
            console.log(data);
            $scope.get_all_secrets();
        });
	};
    
    
    
    
    
    $scope.init = function(){
        var container = document.querySelector('#container');
        var pckry = new Packery( container, {
        // options
        itemSelector: '.item',
        gutter: 10,
        percentPosition: true
        });
    }
});