;(function() {
  "use strict";
  angular
    .module('SODDTree')
    .controller('soddtreeDropController', ['$scope', soddtreeDropController]);
  
  function soddtreeDropController($scope) {
    $scope.drop = $scope.drop || function errorDropFn() { console.error('soddtreeDropController>> drop fn undefined'); };
    
    $scope.dragover = $scope.dragover || function errorDragOverFn() { };
    $scope.dragleave = $scope.dragleave || function errorDragLeaveFn() { };
    $scope.dragenter = $scope.dragenter || function errorDragEnterFn() { };
    
    $scope.onDrop = function onDrop(event, scope, element, attrs) {
      $scope.drop(event, scope, element, attrs);
    };
    $scope.onDragover = function onDragover(event, scope, element, attrs) {
      $scope.dragover(event, scope, element, attrs);
    };
    $scope.onDragleave = function onDragleave(event, scope, element, attrs) {
      $scope.dragleave(event, scope, element, attrs);
    };
    $scope.onDragenter = function onDragenter(event, scope, element, attrs) {
      $scope.dragenter(event, scope, element, attrs);
    };
  }
})();