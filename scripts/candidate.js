var firstName;
var lastName;
var gender;

function generateTechnicalCandidate(){
	var g = getGender(true);
	return {
		gender: g,
		firstName: getFirstName(g),
		lastName: getLastName()
	}
}

function generateNonTechnicalCandidate(){
	return {
		gender: getGender(false),
		firstName: getFirstName(gender),
	}
}

function getFirstName(gender){
	//parse first_name_(fe)male.csv
}

function getLastName(){
	//parse last_names.csv
}

function getGender(techJob){
	var femaleRatio;

	femaleRatio = techJob ? .202 : .465;

	return Math.random() > femaleRatio ? "Male" : "Female";
}