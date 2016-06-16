var readlineSync = require('readline-sync');
var repace = require('replace');
var fs = require('fs');
var path = require('path');
var json =[];

var testing = function(result,string){
		
	  	var res = string.replace(result.from,string);
  		console.log(res); 
  		var from =string;
  		var to = string
  		console.log(eval(result.operation));
 } 

var translator = function() {
	// console.log("enter 'esc' anywhere to exit");
 	var result = {
        from: null,
        'to': null,
        'operation': null}

result.from = readlineSync.question('from\t');
result.to = readlineSync.question('to\t');
result.operation = readlineSync.question('operation\t');
console.log('\ncommand line input is \nfrom \t' + result.from + '\nto\t ' + result.to + '\noperation\t'+ result.operation);

var test= readlineSync.question("\n Do want to test it?\t enter - (y/n)\t\n to Exit enter'esc'\n");
if (test === 'y' || test === 'Y'){

	var string=readlineSync.question('\ninput the string to be tested.');
	console.log('string is-\t'+ string);
	testing(result,string);
	console.log('are you happy with test');
	var happy= readlineSync.question('enter - (y/n)');

	if (happy === 'y' || happy === 'Y')
		{
		var x=readlineSync.question("\n Enter ('esc') to enter,To continue enter ('y') \t");
			if (x === 'esc'){
				json.push(result);
				console.log(json);
				var outPath = path.join(__dirname, "./out.json");
			    fs.writeFileSync(outPath, JSON.stringify(json,null,2), 'utf8', 
			    function(err){console.log(err);});
				}
			else{
				json.push(result);
				translator();					
			}	

		}
	else{
		console.log("\nloop this to old start");
		translator();
		}
	}
else if (test === 'esc'){
	json.push(result);
	console.log(json);
	var outPath = path.join(__dirname, "./out.json");
      fs.writeFileSync(outPath, JSON.stringify(json,null,2), 'utf8', 
      function(err){console.log(err);});
}

else{ 
	json.push(result);
	translator();
	}
}

translator();