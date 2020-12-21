// Page parameters
window._config = {
    cognito: {
        userPoolId: 'us-east-1_SUfk0V2Mn',
        region: 'us-east-1',
		clientId: '23o0opq63mbbuh8mjgr15argfd'
    },
};

var poolData = {
    UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
}; // Cognito user pool parameters
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var loggedUser = userPool.getCurrentUser();

// Page logic
window.onload = function(){
    var pname = getPageName();
    if(loggedUser == null){
        console.log(loggedUser);
        console.log('Loaded...');
    }
    else{
        if(pname === 'signin.html' || pname === 'signup.html'){
            window.location.replace('/');
        } 
    }
};

function signinAction(e){
    e.preventDefault();
    var elements = document.getElementById("signin-form").elements;
    var signinObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        signinObj[item.name] = item.value;
    }

    // Checking that fields was completed
    if(!checkEmail(signinObj.email)){
        document.getElementById("signin-msg").innerHTML = "You must enter a valid email address.";
    }
    else if(!checkPassword(signinObj.password)){
        document.getElementById("signin-msg").innerHTML = "The password you enter is too short.";
    }
    else{
        // We have a solid email and password to check through cognito
        var authData = {
            Username : signinObj.email,
            Password : signinObj.password
        };
        var authDet = new AmazonCognitoIdentity.AuthenticationDetails(authData); // Usr credentials

        var userData = {
            Username : authData.Username,
            Pool : userPool
        };
        
        var loggedUser = new AmazonCognitoIdentity.CognitoUser(userData);

        loggedUser.authenticateUser(authDet, {
            onSuccess: function(result){
                console.log(result);
                //window.location.reload();
            },
            onFailure: function(err){
                console.log(err);
            }
        });
    }
}

function signupAction(e){
    e.preventDefault();
    var elements = document.getElementById("signup-form").elements;
    var signupObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        signupObj[item.name] = item.value;
    }

    if(signupObj.password1 != signupObj.password2){
        // Password not matching
        document.getElementById("signup-msg").innerHTML = "Please write matching passwords...";
    }
    else{
        // Signup action through cognito
        var attList = [];
		
		var cognitoObjEmail = {
			Name : 'email', 
			Value : signupObj.email
        };

        var usrname = signupObj.email.split('@');
        usrname = usrname[0];
        console.log(usrname);
        
        var cognitoAttEmail = new AmazonCognitoIdentity.CognitoUserAttribute(cognitoObjEmail);

        attList.push(cognitoAttEmail);

        // Connection to cognito
        userPool.signUp(usrname,
                        signupObj.password1,
                        attList,
                        null,
                        function(err, result){
			                if (err) {
				                alert(err.message || JSON.stringify(err));
				                return;
			                }
                            cognitoUser = result.user;
                            console.log('user name is ' + cognitoUser.getUsername());
                            //change elements of page
                            document.getElementById("signup-msg").innerHTML = "Check your email for a verification link";
        });
        
        console.log(attList);
    }
    
}

function signoutAction(){
    if (loggedUser != null) {
        loggedUser.signOut();	  
    }
}

/******************************************************
 *                DUBUG FUNCTIONS                     *
 *****************************************************/
function testSignin(){
    var poolData = {
        UserPoolId : _config.cognito.userPoolId,
        ClientId : _config.cognito.clientId
    }; // Cognito user pool parameters

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var loggedUser = userPool.getCurrentUser();
    console.log(loggedUser);
}

/******************************************************
 *                UTILITY FUNCTIONS                   *
 *****************************************************/

function checkEmail(txt){
    if(txt.length >= 7){
        return true;
    }
    return false;
}

function checkPassword(txt){
    if(txt.length >= 6){
        return true;
    }
    return false;
}

function getPageName(){
    var path = window.location.pathname;
    return path.split('/').slice(-1).pop();
}