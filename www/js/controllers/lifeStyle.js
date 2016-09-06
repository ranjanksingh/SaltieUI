app.controller('lifeStyleCtrl', function($scope, $location, $http, $rootScope, $filter, $localStorage, $ionicLoading, serviceLink, $ionicModal,$ionicScrollDelegate,$ionicSlideBoxDelegate,$timeout, facebookService) {
	//initialise the rootscope details value
    $rootScope.TempDetail = "";
    $rootScope.engageData = "";
	$rootScope.buttonType = "Select Room Type";
	$rootScope.firstTimeSelected = 0;
	if($localStorage.userName=="Guest")
	{
		$rootScope.loginLogout="Login";
		$rootScope.showMyFav=true;
		$rootScope.showEngage=true;
		$rootScope.hidePhBook=false;
		$rootScope.showProfileSet=true;
	}
	else{
		$rootScope.showMyFav=false;
		$rootScope.showEngage=false;
        $rootScope.hidePhBook=true;
		$rootScope.loginLogout="Log Out";
        //default token header
       // $http.defaults.headers.common['X-Auth-Token']= $localStorage.auth_token;
	}

	

	
	
	if(typeof analytics !== 'undefined') { analytics.trackView("LifeStyle Controller"); }

//    HardwareBackButtonManager.disable();
    if ($localStorage.userName == "" || $localStorage.userName == null) {
        $location.path('/start');
    } else {

		
        $rootScope.is_engaged = "lifeStyle";
        $rootScope.page = "lifestyle"; //page remember form myfavourite page
		
		
       
        $http.get(serviceLink.url + 'SaltieApp/rest/cruise/count').success(function(data) {
            $rootScope.lifestylecount = data;
			$rootScope.countSailing= data.TotalSailing;
			$rootScope.count = $rootScope.lifestylecount[$localStorage.stylelife];
        });
		
		
				
        $scope.viewall = function() {
            $location.path('/app/list');
        }
		
	

		 
		
    }
});