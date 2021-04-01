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
    if(loggedUser != null){
        window.location.replace('/main.html');
    }
    toggleForm('login');
};

// Login Action
$1('#btlogin').onclick = function(e){
    e.preventDefault();

    // Get elements from the form
    var elements = $('#login-form>*');
    var loginObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        loginObj[item.name] = item.value;
    }

    // Checking that fields was completed
    if(!checkEmail(loginObj.email)){
        // Email
        document.getElementById("login-msg").innerHTML = "You must enter a valid email address.";
    }
    else if(!checkPassword(loginObj.password)){
        // Password
        document.getElementById("login-msg").innerHTML = "The password you enter is too short.";
    }
    else{
        // Goes ok
        console.log('Register action...');
        // We have a solid email and password to check through cognito
        var authDet = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : loginObj.email,
            Password : loginObj.password
        }); // Usr credentials
        
        var loggedUser = new AmazonCognitoIdentity.CognitoUser({
            Username : loginObj.email,
            Pool : userPool
        }); // Usr obj

        loggedUser.authenticateUser(authDet, {
            onSuccess: function(result){
                console.log(result);
                window.location.replace('/main.html');
            },
            onFailure: function(err){
                console.log(err);
            }
        });
    }
  };

$1('#btregister').onclick = function(e){
    e.preventDefault();
    var elements = $('#register-form>*');
    var registerObj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        registerObj[item.name] = item.value;
    }

    if(registerObj.password1 != registerObj.password2){
        // Password not matching
        document.getElementById("register-msg").innerHTML = "Please write matching passwords...";
    }
    else{
        // register action through cognito
        var attList = [];
		
		var cognitoObjEmail = {
			Name : 'email', 
			Value : registerObj.email
        };

        var usrname = registerObj.email.split('@');
        usrname = usrname[0];
        console.log(usrname);
        
        var cognitoAttEmail = new AmazonCognitoIdentity.CognitoUserAttribute(cognitoObjEmail);

        attList.push(cognitoAttEmail);

        // Connection to cognito
        userPool.signUp(usrname+'',
                        registerObj.password1,
                        attList,
                        null,
                        function(err, result){
			                if (err) {
				                alert(err.message || JSON.stringify(err));
				                return;
			                }
                            cognitoUser = result.user;
                            alert("Check your email for a verification link");
                            toggleForm('login');
        });
        
        console.log(attList);
    }
};

$1('#login-link').onclick = function(e){
    toggleForm('login');
};

$1('#register-link').onclick = function(e){
    toggleForm('register');
};

function toggleForm(modo){
    if(modo === 'login'){
        $1('#login-form').style.display = 'block';
        $1('#register-form').style.display = 'none';
    }
    else if(modo === 'register'){
        $1('#login-form').style.display = 'none';
        $1('#register-form').style.display = 'block';
    }
}