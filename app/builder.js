(function () {

  'use strict';

  angular.module('app', [])

  .controller('builderController', ['$scope', '$log',
    function($scope, $log) {
    $scope.changeCat = function(cat) {
      $log.log("test");
    };
  }

  ]);

}());
