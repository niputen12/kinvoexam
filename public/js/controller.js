
app.controller ('headerCtrl', function ($scope){
	$scope.navAbout = "About"
	$scope.navContact = "Contact Us"
	
});


app.controller ('modalCtrl', function ($scope){
	$scope.aboutContent1 = "About Us"
	$scope.aboutContent2 = "This application is made for acme company"
	$scope.aboutContent3 = "Build using Html/CSS/MatrializeCSS for front end and ROR and Javascript for Back end"
	$scope.aboutContent4 = "Submitted By: Gonzales, Joshua Taylor and Lapida, John Red P."
	
	
});

app.controller ('welcomeCtrl', function ($scope){
	$scope.welcomeContent1 = "Welcome to ACME Application"
	$scope.welcomeContent2 = "Pick a page and post something"
	$scope.welcomeContent3 = "using our application."
	$scope.welcomeButton = "Try it now!"
	
	
});

app.controller ('stepCtrl', function ($scope){
	$scope.stepContent1 = "GETTING STARTED"
	$scope.stepContent2 = "You can post in any page by using this application with a few steps."
	$scope.stepContent3 = "Go to the Website. Try it. Login via Facebook. Fill up the form. Post"
	
});

app.controller ('contactCtrl', function ($scope){
	$scope.contactTitle = "Contact Us"
	$scope.contactName = "Name"
	$scope.contactEmail = "Email"
	$scope.contactNumber = "Phone Number"
	$scope.contactButton = "Send"
	
});

app.controller ('mediaCtrl', function ($scope){
	$scope.mediaFb = "www.acebook.com/acmecompany"
	$scope.mediaTwitter = "www.twitter.com/acmecompany"
	$scope.mediaInstagram = "www.instagram.com/acmecompany"
	
	
});


appPost.controller ('loginCtrl', function ($scope){
	$scope.loginContent = "WELCOME TO ACME APPLICATION."
	$scope.loginContent2 = "Click login via facebook to continue."
	
	
});

appPost.controller ('fillupCtrl', function ($scope){
	$scope.fillLogout = "Logout"
	$scope.fillTitle = "Post on Facebook"
	$scope.fillChoose = "Choose Page"
	$scope.fillCaption = "Caption"
	$scope.fillTag ="Tag"
	$scope.fillReplyChat = "Page's Private Reply"
	$scope.fillReplyCom = "Page's Comment Reply"
	$scope.fillButton = "Post"
	$scope.fillFooter = " © 2018 ACME COMPANY"



	
	
});











