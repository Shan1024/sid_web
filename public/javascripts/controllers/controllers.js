var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('editprofile', {
      url: '/editprofile',
      templateUrl: 'partials/editprofile.html',
      controller: 'EditProfileCtrl'
    }).state('newsfeed', {
      url: '/newsfeed',
      templateUrl: 'partials/newsfeed.html',
      controller: 'NewsFeedCtrl'
    }).state('myratings', {
      url: '/myratings',
      templateUrl: 'partials/myratings.html',
      controller: 'MyRatingsCtrl'
    }).state('rateafriend', {
      url: '/rateafriend',
      templateUrl: 'partials/rateafriend.html',
      controller: 'RateAFriendCtrl'
    });

  $urlRouterProvider.otherwise('newsfeed');
}]);

app.controller('EditProfileCtrl', ['$scope', function($scope){
  $scope.EditProfileCtrlTest = 'EditProfileCtrlTest';
}]);


app.controller('NewsFeedCtrl', ['$scope', function($scope) {
  $scope.NewsFeedCtrlTest = 'NewsFeedCtrlTest';
}]);

app.controller('MyRatingsCtrl', ['$scope', function($scope){
  $scope.MyRatingsCtrlTest = 'MyRatingsCtrlTest';
}]);

app.controller('RateAFriendCtrl', ['$scope', function($scope){
  $scope.RateAFriendCtrlTest = 'RateAFriendCtrlTest';
}]);
