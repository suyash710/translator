var readlineSync = require('readline-sync');
var repace = require('replace');
var fs = require('fs');
var path = require('path');

var json =[];
//input College Name for the folder.
var college = readlineSync.question('\nCollege - ');

//makes a folder with var college
var dir = './dataStore/'+college;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);}

//input data for the file name (.Json) 
var data = readlineSync.question('Data type -  ');

//function to Test the Input String-
var testing = function(result,testString){
	try{
		var res = testString.replace(result.from,testString);
  		var from =testString; var to = testString; 		
  		console.log('test is- '+eval(result.operation));
	}
	// Error in operation :-
	catch (err){
		console.log('ERROR in Operation!');console.log('enter the Entity again');
	  	translator();
 	} 
}
//Main() function-
var translator = function() {
 	var result = {
 	   'from': [],
       'to': [],
       'operation': []}

//reading the Data from User- 
result.from = readlineSync.question('\nfrom -  ');
result.to = readlineSync.question('to - \t');
result.operation = readlineSync.question('operation (from) -  ');
	if (result.operation === '')
		{result.operation = 'from';}

//Displays the Data Entered	
console.log(result);

//condition whether to Test the String- 
var test= readlineSync.question("\nDo want to Test it? (y/n)- ");
 if (test === 'y' || test === 'Y'){

	//input the String to Test
	var testString=readlineSync.question("\nInput to be tested- ");
	console.log('string is-\t'+ testString);
	//Calling the 'testing' Function
	testing(result,testString);

	//input if you are Happy with the test-
	var happy= readlineSync.question("\nAre you Happy with test (y/n)- ");
	if (happy === 'y' || happy === 'Y'){

		//do you Want to add more entity
		var addEntity = readlineSync.question("\nDo you Want to Add more Entities? (y/n)- ");
			//Exit the Programme and output the Json
			if (addEntity === 'n'){
				json.push(result);
				console.log(json);console.log("\nEND");
				var outPath = path.join(__dirname, "./dataStore/"+college+"/"+data+".json");
			    fs.writeFileSync(outPath, JSON.stringify(json,null,2), 'utf8', 
			    function(err){console.log(err);});
				}
			else if (addEntity === 'y'){
				json.push(result);
				translator();					
			}
		}
	else{	//if you are not happy with the Test.
		console.log("\nEnter the Entity again-");
		translator();
		}
	}

 else if (test === 'n' || test === 'N'){ 
 	
 	//Do you wanna add more Entities- 
	var addEntity=readlineSync.question("Do you Want to Add more Entities (y/n)- ");
		//Exit the Programme and output the Json
		if (addEntity === 'n'){
			json.push(result);
			console.log(json);console.log("\nEND");
			var outPath = path.join(__dirname, "./dataStore/"+college+"/"+data+".json");
		    fs.writeFileSync(outPath, JSON.stringify(json,null,2), 'utf8', 
		    function(err){console.log(err);});
				}
		else if (addEntity === 'y'){
			json.push(result);
			translator();					
			}	
		}
}
translator();