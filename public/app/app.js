(function (angular) {
    "use strict";

	angular.module('MemoryApp', [
		'config',
		'utils',
		'themes'
	])
	.controller('MemoryAppController', [
		'$scope',
		'settings',
		'arrayUtils',
		'themeOptions',
		'animalsService',
		function($scope, settings, arrayUtils, themeOptions, animalsService){

			$scope.gameGrid = [];

			$scope.themes = themeOptions.types;
			$scope.themeDropdown = "object:4";

			$scope.difficulty = settings.difficulty;
			$scope.selectedDifficulty = {
				val: "easy",
			};

			$scope.currentState = {
				gameStarted: false
			};

			$scope.selectDifficulty = function(difficulty) {

				if(difficulty === "easy") {
					$scope.gridWidth = settings.easyWidth;
					$scope.gridHeight = settings.easyHeight;
				} 

				if (difficulty === "medium") {
					$scope.gridWidth = settings.mediumWidth;
					$scope.gridHeight = settings.mediumHeight;
				}

				if (difficulty === "hard") {
					$scope.gridWidth = settings.hardWidth;
					$scope.gridHeight = settings.hardHeight;
				} 

				animalsService.getAnimals(difficulty).forEach(function(element, index, array) {
					// go through each element in array and push two of them into gameGrid array
					$scope.gameGrid.push(element);
					$scope.gameGrid.push(element);
				});
				arrayUtils.shuffleArray($scope.gameGrid);

				$scope.currentState.gameStarted = true;
			};

			$scope.newGame = function() {
				alert("Not implemented yet");
			};

			$scope.showAnswers = function() {
				alert("Not implemented yet");
			};

			$scope.goToMainMenu = function() {

				$scope.currentState.gameStarted = false;
				$scope.gameGrid = [];
			};
		}
	]);
}(angular));