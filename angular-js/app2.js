const app2 = angular.module("myApp", []);

app2.controller("myController", [
  "$scope",
  function ($scope) {
    $scope.name = "Jhon Cena";
    $scope.age = 38;
    $scope.fName = "Jhon";
    $scope.lName = "Cena";
    $scope.fullName = function (fName, lName) {
      return fName + " " + lName;
    };
    $scope.isSpy = true;
    $scope.codeName = "Invisible";
  },
]);

app2.controller("employeeController", [
  "$scope",
  function ($scope) {
    $scope.employees = [
      {
        fName: "Chiragggggggggggggggg",
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

app2.controller("ngClickController", [
  "$scope",
  function ($scope) {
    $scope.count = 0;
    $scope.show = true;
    $scope.toggleShow = function () {
      $scope.show = !$scope.show;
    };
  },
]);


app2.controller("formController", [
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