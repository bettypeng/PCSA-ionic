angular.module('starter.controllers')
.controller('MedicalController', function($scope, $stateParams) {

	$scope.contacts=[{
		"name": "PC SAVES Anonymous Helpline",
		"phone": "Call or Text: Outside the US: 001-408-844-HELP(4357), within the US: 408-844-HELP(4357)",
		"email": "Online Chat: pcsaveshelpline.org",
		"summary": "The PC SAVES Helpline provides anonymous confidential crisis intervention, support and information to Peace Corps Volunteers and trainees who have been affected by sexual assault via a variety of different platforms. All options are staffed by trained professionals not affiliated with Peace Corps, available 24/7.  No personally identifying information will be collected.",
		"show": false
	},{
		"name": "Office of Victim Advocacy",
		"phone": "Duty Phone: (202) 409-2701",
		"email": "E-mail: victimadvocate@peacecorps.gov",
		"summary": "Centralized resource to Volunteers who are victims of sexual assault and violent crime regarding the services they are entitled to receive, and ensuring their voices are heard and considered in all decisions affecting their service and care.",
		"show": false
	},{
		"name": "Office of Investigative General",
		"phone": "	Duty Phone: (202) 692-2915",
		"email": "Email: oig@peacecorps.gov",
		"summary": "	Resource for those who have been harmed by misconduct or criminal wrongdoing by a fellow Volunteer or Peace Corps Staff.  Independent from Peace Corps with law enforcement officers  who have the unique authorities to help seek a fair resolution and, in appropriate cases, to seek prosecution in the United States or host country.  Learn more: peacecorps.gov/OIG",
		"show": false
	},{
		"name": "Office of Civil Rights and Diversity",
		"phone": "Phone: (202) 692-2139",
		"email": "Email: ocrd@peacecorps.gov",
		"summary": "Resource to provide leadership and guidance on all civil rights, equal employment opportunity and diversity matters; and to address issues of discrimination and harassment, including sexual harassment, in the recruitment/service of Volunteers/Trainees.",
		"show": false
	}];

	$scope.hover = function(fruit) {
        // Shows/hides the delete button on hover
        return fruit.show = ! fruit.show;
    };

  $scope.text = "YOYOYOYO";



  $scope.fire = function(){
    $scope.text = "woohoo";
  };

});
