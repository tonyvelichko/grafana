define([
  'angular',
  'underscore'
],
function (angular, _) {
  'use strict';

  var module = angular.module('kibana.controllers');

  module.controller('SinglePanelCtrl', function(
    $scope, $rootScope, $http, dashboard, $routeParams, alertSrv) {

    $scope.init = function() {

      $rootScope.$on('dashboard-loaded', function() {
        $scope.row = {
          height: '600px'
        };
        if (window.parent) {
          console.log(window.parent);
        }

        $scope.$index = 0;

        _.each(dashboard.current.rows, function(row) {
          if (!row.panels) {
            return;
          }
          _.each(row.panels, function(panel) {
            if (panel.title === $routeParams.title) {
              $scope.panel = panel;
            }
          });
        });

        if (!$scope.panel) {
          alertSrv.set('Panel not found','','error',5000);
          return;
        }
      });
    };

    $scope.init();

  });


});
