define([
  'angular',
],
function (angular) {
  'use strict';

  var module = angular.module('kibana.controllers');

  module.controller('SinglePanelCtrl', function($scope, $rootScope, $http, dashboard) {

    $rootScope.singlePanelMode = true;

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
    });


    $scope.init = function() {

      $scope.row = {
        height: '400px'
      };

      $scope.$index = 0;

      $scope.panel = {
        "span": 12,
        "editable": true,
        "type": "graphite",
        "x-axis": true,
        "y-axis": true,
        "scale": 1,
        "y_formats": ["short", "short"],
        "grid": {
          "max": null,
          "min": null
        },
        "resolution": 100,
        "lines": true,
        "fill": 1,
        "linewidth": 2,
        "points": false,
        "pointradius": 5,
        "bars": false,
        "stack": true,
        "spyable": true,
        "options": false,
        "legend": true,
        "interactive": true,
        "legend_counts": true,
        "timezone": "browser",
        "percentage": false,
        "zerofill": true,
        "nullPointMode": "connected",
        "steppedLine": false,
        "tooltip": {
          "value_type": "cumulative"
        },
        "targets": [
          {
            "target": "randomWalk('random walk')"
          },
          {
            "target": "randomWalk('random walk2')"
          },
          {
            "target": "randomWalk('random walk3')"
          }
        ],
        "aliasColors": {},
        "aliasYAxis": {},
        "title": "Graphite test"
      };

    };

    $scope.colors = [
      "#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0", //1
      "#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477", //2
      "#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0", //3
      "#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93", //4
      "#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7", //5
      "#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B", //6
      "#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"  //7
    ];

    $scope.init();

  });


});
