var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('openbugs', {
      url: '/openbugs',
      templateUrl: 'partials/openbugs.html',
      controller: 'OpenBugsCtrl'
    }).state('unittests', {
      url: '/unittests',
      templateUrl: 'partials/unittests.html',
      controller: 'UnitTestsCtrl'
    }).state('coverage', {
      url: '/coverage',
      templateUrl: 'partials/coverage.html',
      controller: 'CoverageCtrl'
    });

  $urlRouterProvider.otherwise('openbugs');
}]);

app.controller('OpenBugsCtrl', ['$scope', function($scope){
  $scope.OpenBugsCtrlTest = 'OpenBugsCtrlTest';
}]);


app.controller('UnitTestsCtrl', ['$scope', function($scope) {
  $scope.UnitTestsCtrlTest = 'UnitTestsCtrlTest';
}]);

app.controller('CoverageCtrl', ['$scope', function($scope){
  $scope.CoverageCtrlTest = 'CoverageCtrlTest';
}]);
