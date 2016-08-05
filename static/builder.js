(function () {

  'use strict';

  angular.module('app', ['ngRoute'])

  .controller('builderController', ['$scope',
    function($scope) {

    $scope.newCat = function(cat) {
      alert("test");
    };

  }

  ]);

}());
