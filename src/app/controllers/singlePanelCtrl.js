define([
  'angular',
],
function (angular) {
  'use strict';

  var module = angular.module('kibana.controllers');

  module.controller('SinglePanelCtrl', function($scope, $rootScope, $http, dashboard, $routeParams) {

    /*var dashboard

    dashboard.dash_load({
      services: {
        filter: {
          list: [],
          time: {
            from: "now-6h",
            to: "now"
          }
        }
      }
    });*/

    $scope.init = function() {

      $rootScope.$on('dashboard-loaded', function() {
         $scope.row = {
          height: '400px'
        };

        $scope.$index = 0;

        $scope.panel = dashboard.current.rows[0].panels[0];
      });
    };

    $scope.init();

  });


});
