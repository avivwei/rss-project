var app = angular.module('journyApp', []);

app.directive('myCard', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: {
      title: '=myTitle',
      pic: '=myPic'
    },
    templateUrl: 'myCard',
    transclude: true,
    controller: function($element, $transclude) {
$element.find('.content').append($transclude());
    },
  };
});