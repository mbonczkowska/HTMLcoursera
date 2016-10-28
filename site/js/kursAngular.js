	$(document).ready(function(){
			var person ={
				name: "",
				occupation: "student"
			}
			$("#name").keyup(function(){
				person.name = $(this).val();
				var totalASCII = 0;
				for(var i = 0; i <person.name.length; i++){
					totalASCII +=  person.name.charCodeAt(i);		
				}
				$("#output").html(totalASCII);
				
			});


		});
		(function(){
			'use strict';

			angular.module("myFirstApp", []) // [] - dependencies
			.controller("MyFirstController", function($scope){
				$scope.name = "Madzia";
				$scope.sayHello = function(){
					return "Hello";
				};
				$scope.price = 19;

			})
			.controller("tvSeries",[ "$scope", function($scope){
				$scope.title = "Best tv series";
				$scope.products=[
				{name: 'American Horror Story:Hotel',
				price: 20,
				pubdate: new Date('2014','03','12'),
				likes:0
				},
				{name: 'American Horror Story:Ranaroke',
				price: 20,
				pubdate: new Date('2015','03','12'),
				likes:0
				}
				];

			$scope.plusOne = function(index){
				$scope.products[index].likes+=1;
			}
			}])
			.controller("nameCalculatorController",function($scope){
				$scope.name = "";
				$scope.totalValue = 0;

				$scope.displayNumeric = function(){
					var totalNameValue = numericToString($scope.name);
					$scope.totalValue = totalNameValue;
					
				}

				function numericToString(string){
					var totalStringValue = 0;
					for(var i = 0; i< string.length;i++){
						totalStringValue += string.charCodeAt(i);
					}
					return totalStringValue;
				}
			});
			

		/*	angular.module("myFirstApp", [])
			.controller("tvSeries",[ "$scope", function($scope){
				$scope.title = "Best tv series";
				$scope.products=[
				{name: 'American Horror Story:Hotel',
				price: 20,
				pubdate: new Date('2014','03','12'),
				likes:0
				},
				{name: 'American Horror Story:Ranaroke',
				price: 20,
				pubdate: new Date('2015','03','12'),
				likes:0
				}
				];

			$scope.plusOne = function(index){
				$scope.products[index].likes+=1;
			}
			}]);*/


		
		})();
