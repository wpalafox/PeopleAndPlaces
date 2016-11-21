/*function pnpUser(userName) {
	this.name = "";
	this.email = "";
	this.address = "";
	this.contacts = [{name: "John Doe", email: "jdoe@gmail.com", address: "666 Boring Dr. Small Town, IA 88899"},
					{name: "Jane Doe", email: "janed@gmail.com", address: "333 Waiting St. Factory Town, MI 77766"},
					{name: "Delilah Goodbody", email: "delgb@gmail.com", address: "23 Madison Ave New York, NY 22244"}];

	function init() {
		self.name = "Dudley Doright";
		self.email = "dudley_doright@gmail.com";
		self.address = "Somewhere St. Manitoba, Canada 99999"
		console.log(self.name + ";" + self.email + ";" + self.address);
	}

	var self = this;

	init();

}  */

$(document).ready(function(){ 

//Initial array of labels
var labelsArray = ['Seafood', 'Mexican food', 'Chinese food', 'Thai food',
'French food', 'Museums', 'Parks', 'Pools', 'Monuments', 'Clubs', 'Dance Music'];

//Array of selected buttons 
var selectedLabels = [];


var labelCount = labelsArray.length;

//On Click event associated with the add label function 
//Dynamically generate buttons using jQuery

//==============================================================

//This function adds user inputed labels to the labelArray

$("#addLabelButton").on("click", function(){

	//Captures the user input value and puts into a variable
	var label = $('#addLabel').val().trim();

	//Pushes the variable into an array
	labelsArray.push(label);

	//Console logs the array for development purposes
	console.log(labelsArray);
	
	//Calls the render labels function
	renderLabels();
	
	//Prevents the form from dwiscarding the console.log 
	event.preventDefault();

});

//================================================================

/*This on click event will change the color of the selected buttons and push the data to the 
selected Labels array*/

function selectedLabels(){

	alert("test");

	console.log("GoGO");
	/*
	//Captures the user input value and puts into a variable
	var selectedLabel = $(this).data()

	//Pushes the variable into an array
	selectedLabels.push(selectedLabel);

	//Console logs the array for development purposes
	console.log(selectedLabels);
	
	//Prevents the form from discarding the console.log 
	event.preventDefault(); */

};


//==============================================================


//This function renders and organizes the labels

function renderLabels(){

	    $('#labelsDisplay').empty();	
		$('#restaurantDisplay').empty();
		$('#activitiesDisplay').empty();
		$('#nightDisplay').empty();	
	
	//Loops through array of labels
	for (var i = 0; i < labelsArray.length; i++){

		
		var l = $('<button type="button" class="btn btn primary btm-sm">')

		l.addClass('label'); //Added class
		l.attr('data-name', labelsArray[i]); //added data-attribute
		l.text(labelsArray[i]); //Displays label text on button
		
		
		//Logic to sort the labels into designated Panels
		
		if(labelsArray[i].includes("food") === true || labelsArray[i].includes("food") === true){
			
			console.log("it's a restaurant");
			
			$('#restaurantDisplay').append(l); /*Adds buttons to HTML*/

		}else if(labelsArray[i].includes("club") || labelsArray[i].includes("Club") === true || labelsArray[i].includes("live") === true || labelsArray[i].includes("Music") === true) {

			console.log("it's a nightlife activity");
			
			$('#nightDisplay').append(l); /*Adds buttons to HTML*/ 

		}else if(labelsArray[i].includes("outdoors") || labelsArray[i].includes("mountains")||labelsArray[i].includes("hiking")|| labelsArray[i].includes("rivers")
		||labelsArray[i].includes("Pools")||labelsArray[i].includes("Pools")||labelsArray[i].includes("Parks")){
			
			console.log("it's an Activity");
			
			$('#activitiesDisplay').append(l); /*Adds buttons to HTML*/
		
		}else{

			$('#labelsDisplay').append(l); /*Adds buttons to HTML*/

		}

	}
 
 }

//================================================================

renderLabels();

//================================================================

//function that resets all of the label displays 
$('#resetLabelsButton').on('click', function(){



	$('#labelsDisplay').empty();	
	$('#restaurantDisplay').empty();
	$('#activitiesDisplay').empty();
	$('#nightDisplay').empty();


});

//===============================================================



/* function organizeLabels(){

for( i=0 ; i<labelsArray.length; i++){
	if(labelsArray[i].includes("food"){


	}

} */

//}




$(document).on('click', '.label', selectedLabels);



});





	