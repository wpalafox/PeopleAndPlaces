
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


var contactsArray  = [{contactName:"Mike", address:"100 N Brazos Austin, TX", tags: ['Sushi', 'Movies', 'Golf','Concerts','Art Museum']},
                	  {contactName:"Steve", address:"312 S Madison St., La Grange IL", tags: ['Concerts', 'Dance', 'Movies','Baseball']},
                	  {contactName:"Lisa", address:"1060 W Addison St., Chicago IL", tags:['Bowling', 'Concerts', 'Art Museum', 'Golf','Sailing']}];


//Eventually want to uncomment this- when I figure out why it won't reappear
//$('#editedContact').hide();

//Calls the function
renderContacts();

//Keeps the count 
var labelCount = labelsArray.length;








/////////////////////////ON CLICK EVENTS AND FUNCTIONS////////////////////////

//Edit Contact Button
$(".editButton").on("click", editContact);


//On Click event associated with the add label function 
//Dynamically generate buttons using jQuery

//====================================================////////

//This function adds user inputed labels to the labelArray

$("#addLabelButton").on("click", function(){

	//Captures the user input value and puts into a variable
	var label = $('#labelBox').val().trim();

	//Pushes the variable into an array
	labelsArray.push(label);

	//Console logs the array for development purposes
	console.log(labelsArray);
	
	//Calls the render labels function
	renderLabels();
	
	//Prevents the form from discarding the console.log 
	event.preventDefault();

});

//===================================================//////////================





//=====================================================////////==================


$("#deleteLabelButton").on("click", deleteLabel);

	
	


	//Pushes the variable into an array
	

	

	//Console logs the array for development purposes
	
	
	//Calls the render labels function

	
	//Prevents the form from dwiscarding the console.log 
	



//==============================================================


function deleteLabel(){   

//Captures the user input and deletes it
	
	var label = $('#labelBox').val().trim();
	//Splices the selected label
	if(label !== ""){

		var index = labelsArray.indexOf(label);
		if (index > -1){

			labelsArray.splice(index, 1);
		}
	}


	renderLabels();

	event.preventDefault();
}


//===============================================================





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
			
			//console.log("it's a restaurant");
			
			$('#restaurantDisplay').append(l); /*Adds buttons to HTML*/

		}else if(labelsArray[i].includes("club") || labelsArray[i].includes("Club") === true || labelsArray[i].includes("live") === true || labelsArray[i].includes("Music") === true) {

			//console.log("it's a nightlife activity");
			
			$('#nightDisplay').append(l); /*Adds buttons to HTML*/ 

		}else if(labelsArray[i].includes("outdoors") || labelsArray[i].includes("mountains")||labelsArray[i].includes("hiking")|| labelsArray[i].includes("rivers")
		||labelsArray[i].includes("Pools")||labelsArray[i].includes("Pools")||labelsArray[i].includes("Parks")){
			
			//console.log("it's an Activity");
			
			$('#activitiesDisplay').append(l); /*Adds buttons to HTML*/
		
		}else{

			$('#labelsDisplay').append(l); /*Adds buttons to HTML*/

		}

	}
 
   return false;

 }

//===============================================================================================================

renderLabels();

//===============================================================================================================

//function that resets all of the label displays 
$('#resetLabelsButton').on('click', function(){


	$('#labelsDisplay').empty();	
	$('#restaurantDisplay').empty();
	$('#activitiesDisplay').empty();
	$('#nightDisplay').empty();


});

//=================================================================================================//


function editContact() {


//Assigns the variable the with i value of the corresponding contact
var contact = contactsArray[this.value];

//defines name variable as the contactName from the contact variable
var name = contact.contactName;

console.log(name);



//All of my edited values on in the variables 

//var editedContactName = $('#contactName').value().trim();
//var editedAddress = $('#contactAddress').value().trim();
//var editedTags = $('#tags').value();.trim();


//Now I need to append these variables to the HTML


return false;

}

/////////////////////////////////////////////////////////////

function renderContacts(){

	$('#contactsDisplay').empty();	


	for(var i=0; i < contactsArray.length; i++){
		
		//Defines edit button and attaches value of the array element it is connected to 
		var edit = $('<button type="submit" class="editButton" value="' + i + '">Edit</button>');
		
		//Defines contact variable as the i element in the contactArray
		var contact = contactsArray[i];
		


		//Defines the c variable 
		var c = $('<div class="contactDiv">');
		
		c.html(contact.contactName + " " + contact.address + " " +contact.tags.toString()); //Displays label text on div
		
		c.attr('data-name', i);    
		c.append(edit);
		c.append('</div>');

		console.log(c);
		
		//Appends the Div contact to the page

		$('#contactsDisplay').append(c);



	

	};

//==================================================================================================//







}









});





