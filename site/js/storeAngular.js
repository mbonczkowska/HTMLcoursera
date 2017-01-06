(function(){

	// drukuje nazwe atrybutu 
	//console.log($(".form-input").attr("type"));
	var person = "Madzia";
	var person ="Magdalena";

	function whatsMyName(name){
		return name;
	}

	console.log(whatsMyName(person));

	var alienApp = {};

	alienApp.person = "Alien";



	alienApp.whatsMyName = function(name){
		return name;
	}
	console.log(alienApp.whatsMyName(alienApp.person));

	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller("PanelController",function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	var gems =[ {
		name: 'Chłodnica',
		price: 3000000,
		description: 'No chłodnica',
		canPurchase:false,
		soldOut:false,
		images:[
			{
				full: '../images/kurczak.jpg'
			}
		]
	},
	{
		name: 'Sprężarka',
		price: 2000000,
		destription: 'No sprężarka',
		canPurchase:true,
		soldOut:false,
		images:[
			{
				full: '../images/sajgonki.jpg'
			}
		]
	}]
})
();