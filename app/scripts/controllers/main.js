'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$http.get('images/model.json').
  success(function(data) {
    $scope.name = data.person.firstName + ' ' + data.person.lastName;
    $scope.mail = data.person.mail;
    $scope.adress = data.person.adress;
    $scope.website = data.person.website;
    $scope.dateBirth = data.person.dateBirth;
    $scope.phone = data.person.phone;
    $scope.status = data.person.status;
    $scope.profile1 = data.person.profile1;
    $scope.profile2 = data.person.profile2;
    $scope.professionalExperiences = data.professionalExperiences;
    $scope.education = data.education;
    $scope.technicalSkills = data.technicalSkills;
  })

});
