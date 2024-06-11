const app = angular.module("myApp", []);

app.controller("myController", [
  "$scope",
  function ($scope) {
    $scope.name = "Jhon Cena";
    $scope.age = 18;
    $scope.fName = "Jhon";
    $scope.lName = "Cena";
    $scope.fullName = function () {
      return $scope.fName + " " + $scope.lName;
    };
    $scope.isSpy = true;
    $scope.codeName = "Invisible";
  },
]);

app.controller("employeeController", [
  "$scope",
  function ($scope) {
    $scope.employees = [
      {
        fName: "Chirag",
        lName: "Paswan",
        salary: 100000,
      },
      {
        fName: "Ross",
        lName: "Berry",
        salary: 50000,
      },
      {
        fName: "Sam",
        lName: "Altman",
        salary: 60000,
      },
    ];
  },
]);

app.controller("ngClickController", [
  "$scope",
  function ($scope) {
    $scope.count = 0;
    $scope.show = true;
    $scope.toggleShow = function () {
      $scope.show = !$scope.show;
    };
  },
]);

app.controller("formController", [
  "$scope",
  function ($scope) {
    $scope.form = {};

    $scope.addReview = function () {
      $scope.reviews.push($scope.form);
      $scope.form = {};
    };
    $scope.reviews = [
      { comment: "Could this be more awsome", author: "Chirag David" },
      { comment: "How are you doin?", author: "Sam Altman" },
    ];
  },
]);
