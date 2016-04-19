app.controller('emailloginCtrl', function($scope, $location, $state, $http, $localStorage, $state, loginService, serviceLink) {
	
	var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
	  if(isIPad==true || isIOS==true)
	  {
 		document.getElementById("emaillogin").style.marginTop = "20px";
	  }

	if(typeof analytics !== 'undefined') { analytics.trackView("Email Controller"); }
	
    if ($localStorage.userName == "" || $localStorage.userName == null || $localStorage.userName == "Guest") {
        
        $scope.close = function() {
            $location.path('/start');
        }
        $scope.back = function() {
            $location.path('/login');
        }
        $scope.Login = function(form, user) {
            if (form.$valid) //cheacking the form valid or not
            {
                var url = serviceLink.url + 'SaltieApp/rest/cruise/user/login';
                var obj = {
                    userName: user.email,
                    password: user.password
                };
                var data = "userName=" + obj.userName + "&password=" + obj.password;
                $scope.status = "";
                loginService.login(url, data)
                    .then(
                        /* success function */
                        function(status) {
                            $scope.status = status;
                            if ($scope.status == 200) {
                                $localStorage.userName = user.email;
                                $location.path('app/lifeStyle');
                            } else {
                                loginService.errors(form, $scope.status);
                            }


                        }, function(error) {
                            //If an error happened, handle it here
                        });



            }
        }
    } else {
        $state.go('app.lifeStyle');
    }
});