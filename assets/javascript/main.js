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
'French food', 'Museums', 'Parks', 'Pools', 'Monuments'];

var labelCount = labelsArray.length;

//On Click event associated with the add label function 
//Dynamically generate buttons using jQuery

//========================================================

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
	
	//Prevents the form from discarding the console.log 
	event.preventDefault();

});

//=============================================================

function renderLabels(){

	$('#labelsDisplay').empty();
	
	//Loops through array of labels
	for (var i = 0; i < labelsArray.length; i++){

		//$('#labelsDisplay').empty();	
		
		//

		var l = $('<button type="button" class="btn btn primary btm-sm">')

		l.addClass('label'); //Added class
		l.attr('data-name', labelsArray[i]); //added data-attribute
		l.text(labelsArray[i]); //Displays label text on button
		$('#labelsDisplay').append(l); //Adds buttons to HTML

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


});





	